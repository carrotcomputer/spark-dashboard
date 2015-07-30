import Ember from 'ember';

export default Ember.Route.extend({ 
  renderTemplate: function(){
    this.render('nav', {
      into: 'application',
      outlet: 'nav',
      controller: 'nav'
    });

    this.render();
  },
  
  invoicedController: function(controller){
    this.store.find('invoiced').then(function(data) {
      if(data.content.length === 0) {
        var newInvoiced = controller.store.createRecord('invoiced', {
          invoiceName: 'Empty',
          invoiceAmount: 'Empty'
        });
        newInvoice.save().then(function(data) {
          controller.set('invoiced', data.get('firstObject'));
        });
      } else {
        controller.set('invoiced', data.get('firstObject'));
      }
    });
  }
});