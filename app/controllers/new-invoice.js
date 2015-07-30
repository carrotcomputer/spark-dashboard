import Ember from 'ember';

export default Ember.Controller.extend({
  invoiceName: "",
  invoiceAmount: "",
  
  actions: {
    createInvoice: function() {
      var newInvoice = this.store.find('invoiced');
      var controller = this;
      
      newInvoice.set('invoiceName', "newInvoice.get('invoicedName')");
      newInvoice.save();
    }
  }
});