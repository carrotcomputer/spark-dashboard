/*global moment: true*/
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
  return this.store.find('allrevenue');
},
renderTemplate: function(){
  this.render('nav', {
    into: 'application',
    outlet: 'nav',
    controller: 'nav'
  });

  this.render();
},
setupController: function(controller){
    var target = moment(new Date());
    var invoiced = this.get('invoiced');
    
    controller.store.find('invoiced').then(function(data){
      var invoices = data;
      var currentDate = new Date();
      
      var filteredInvoices = invoices.filter(function(invoice, index){
        var invoiceDate = invoice.get('invoiceTimeCreated');
        
        if(moment(invoiceDate).format('MM') === moment(currentDate).format('MM')){
          return true;
        } else {
          return false;
        }
      });
      controller.set('invoiced', filteredInvoices);
    });
    
    controller.set('hotlead', controller.store.find('hotlead'));

    this.store.find('revenue').then(function(data) {
      if(data.content.length === null || data.content.length === 0){
  		  var newRevenue = controller.store.createRecord('revenue', {
  			  currentTarget: 0,
  			  invoiced: 0,
          isRevenueEditMode: true,
          dateCreated: 0
  		  });
      newRevenue.save().then(function(data){
      controller.set('revenue', data);
        });
      } 
      else {
        controller.set('revenue', data.get('firstObject'));
        controller.store.find('revenue').then(function(data){
          controller.set('revenue', data.get('firstObject'));
          controller.set('revenue.isRevenueEditMode', false);
        });
      }
    },
    function(){
      alert('It looks like there is no internet connection. Please check later.');
     }
  );
 }
});
