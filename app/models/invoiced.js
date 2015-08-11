/*global moment: true*/
import DS from 'ember-data';

export default DS.Model.extend({
  invoiceName: DS.attr('string'),
  invoiceAmount: DS.attr('number'),
  invoiceTimeCreated: DS.attr('string'),
  
  getInvoiceMonth: function(){
    var target = moment(this.get('invoiceTimeCreated'));
    return target.format('MMMM');
  }.property('invoiceTimeCreated'),
  
  isEditInvoice: DS.attr('boolean', {defaultValue: false})
});
