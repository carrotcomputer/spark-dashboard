import Ember from 'ember';

export default Ember.Controller.extend({
  revenue: {
    currentTarget: "",
    currentRevenue: "",
    invoiceAmount: "",
    dateCreated: "",
    remaining: "",  
    isDataPresent: false,
    },
  invoiced: {
    getInvoiceMonth: function(){
      var target = moment(this.get('invoiceTimeCreated'));
      return target.format('MMMM');
    }.property('invoiceTimeCreated'),
    
    invoiceTimeCreated: DS.attr('string')
  },
  inv:"",
  lead:"",
  clienthold: "",
  revenue: "",
  users: "",
  check: false,
  isEditClientName: false,
  isEditMode: false,
  isRevenueEditMode: false,
	getRevenue: function() {
		this.set('revenue', this.store.find('revenue'));	
	},
  checkEditMode: function() {
    var newRevenue = this.store.find('revenue');
    if(newRevenue.get('currentTarget') > 0 && newRevenue.get('invoiced') > 0)
    {
      newRevenue.set('isRevenueEditMode', false);
    }
    else {
      newRevenue.set('isRevenueEditMode', true);
    }
  },
  actions: {
    deleteInvoice: function(inv) {
      if(confirm("Are you sure you want to remove client " + inv.get('invoiceName') + "?")){
        inv.deleteRecord();
        inv.save();     
      }
    },
  editInvoice: function(inv) {
    inv.set('isEditInvoice', true);
  },
  setEditInvoice: function(inv) {
    if(inv.get('invoiceName') === "") {
      alert('Error: You have left the textbox empty!');
    }
    else {  
      if(inv.get('invoiceAmount') > 0) {
          this.set('invoiced.invoiceName', 'inv.invoiceName');
          this.set('invoiced.invoiceAmount', 'inv.invoiceAmount');
          inv.set('isEditInvoice', false);
          inv.save();
        }
        else {
          alert('Error: Invoice Amount is not correct!');
        }
      }
  },
	editRevenue: function() {
    var currentRevenue = this.get('revenue');
		currentRevenue.set('isRevenueEditMode', true);
	}, 
	addRevenue: function() {
    var currentRevenue = this.get('revenue');
    if (this.get('revenue.currentTarget') > 0)
    {
      currentRevenue.set('dateCreated', new Date());
      currentRevenue.set('isRevenueEditMode', false);
      currentRevenue.set('isDataPresent', true);
      currentRevenue.save();
  	}
    else {
      currentRevenue.set('dateCreated', new Date());
      currentRevenue.set('isRevenueEditMode', true);
      currentRevenue.save();
      alert('You must enter a correct Target / Invoice Amount!');    
    }
  },
  deleteClientHold: function(clienthold) {
	  if(confirm("Are you sure you want to remove this?")){
      var clientHoldDelete = clienthold.get('clientholdprice');
      clientHoldDelete.forEach(function(clientPrice){
        Ember.run.once(function() {
    		  clientPrice.deleteRecord();
          clientPrice.save();
        });
      });
		  clienthold.deleteRecord();
		  clienthold.save();
	  }
  },
  editClientHold: function(clientInfo) {
	  clientInfo.set('isEditClientHold', true);
  },
  editClientHoldDone: function(clienthold) {
    if(clienthold.get('price') > 0 && clienthold.get('onholdname') !== "") {
        clienthold.save();
      }
      else {
        alert('You have inputted the field incorrectly!');
      }
  },
  editClientHoldFinish: function(clientInfo) {
    clientInfo.set('isEditClientHold', false);
    this.transitionTo('all-projects');
  },
  deleteHotLead: function(lead) {
     if(confirm("Are you sure you want to remove Hot Lead " + lead.get('hotLeadName') + "?")){
       lead.deleteRecord();
       lead.save();
     }
  },
  deleteLeadClose: function(client) {
	  if(confirm("Are you sure you want to remove a Lead To Close?")) {
      var leadsToClosePrices = client.get('leadstocloseprice');
      leadsToClosePrices.forEach(function(price){
        Ember.run.once(function() {
    		  price.deleteRecord();
          price.save();
        });
      });
		  client.deleteRecord();
      client.save();
	  }
  },
  editLeadClose: function(clientEdit) {
    clientEdit.set('isLeadToCloseEdit', true);
  },
  editLeadCloseName: function(client) {
    if(client.get('leadName') === "") {
        alert('You have inputted the data incorrectly!');
    }
    else {
      var controller = this.get('leadstoclose');
      client.save();
      }
  }, 
  editLeadClosePrice: function(price) {
    if(price.get('leadsPrice') > 0) {
      price.save();
    }
    else {
      alert('You have inputted the data incorrectly!');
    }
  },
  doneLeadClose: function(client, price) {
    var searchleadprices = client.get('leadstocloseprice');
    var controller = this;
    searchleadprices.forEach(function(price, clientEdit){
      client.set('isLeadToCloseEdit', false);
      client.save();
     /* if(controller.get('price.leadsPrice') > 0) {        
        price.set('leadsPrice', controller.get('price.leadsPrice'));
        client.set('isLeadToCloseEdit', false);
        client.save();
      }
      else {
          controller.set('check', true);
      }*/
    });
    /*
    if(this.get('check') === true) {
      alert('You have inputted the data incorrectly!');
      client.set('isLeadToCloseEdit', false);
      client.save();
    }*/
      
  },
  editHotLead: function(lead) {
      lead.set('isEditHotLead', true);
  },
  setHotLead: function(lead) {
    if(lead.get('hotLeadName') === "") {
      alert('Error: You have left the textbox empty!');
    }
    else {
      this.set('hotlead.hotLeadName', 'lead.hotLeadName');
      lead.save();
      lead.set('isEditHotLead', false);
    }
  },
  } 
});