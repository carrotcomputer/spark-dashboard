import DS from 'ember-data';

export default DS.Model.extend({
  isRevenueEditMode: DS.attr('boolean', true),
  
	currentTarget: DS.attr('number'),
	invoiced: DS.attr('number'),
  currentInvoicedAmount: DS.attr('number'),
  invoiceAmount: DS.attr('number'),
  
	remaining: function(){
    return this.get('currentTarget') - this.get('invoiced');
	}.property('currentTarget', 'invoiced'),
  dateCreated: DS.attr('string'),
  isDataPresent: DS.attr('boolean', {defaultValue: false}),
  
  getMonth: function(){
    var target = moment(this.get('dateCreated'));
    return target.format('MMMM');
  }.property('dateCreated'),
});
