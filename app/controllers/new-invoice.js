import Ember from 'ember';

export
default Ember.Controller.extend({
  invoiced: {
    invoiceName: "",
    invoiceAmount: "",
    invoiceTimeCreated: ""
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
              invoiceAmount: this.get('invoiced.invoiceAmount'),
            });
            newInvoice.set('invoiceTimeCreated', new Date());
            var controller = this;
            newInvoice.save().then(function(){
            controller.transitionTo('all-revenue');
          });
          } 
          else {
            alert('Invoice Amount error!');
          }
        }
      },
    },
});