import Ember from 'ember';

export
default Ember.Controller.extend({
  total: 0,
  invoiced: {
    invoiceName: "",
    invoiceAmount: "",
    invoiceTimeCreated: "",
  },
    actions: {
      createInvoice: function() {
        if (this.get('invoiced.invoiceName') === "") {
            alert('Please ensure you have put valid data into the fields!');
        } else {
          if (this.get('invoiced.invoiceAmount') > 0) {
            var invoiceGet = this.get('invoiced');
            var newInvoice = this.store.createRecord('invoiced',{
              invoiceName: this.get('invoiced.invoiceName'),
              invoiceAmount: parseInt(this.get('invoiced.invoiceAmount')),
            });
            newInvoice.set('invoiceTimeCreated', new Date());
            var superthis = this;
            newInvoice.save().then(function(){              
            superthis.transitionTo('all-revenue');
          });
          } 
          else {
            alert('Invoice Amount error!');
          }
        }
      },
    },
});