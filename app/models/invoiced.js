/* global moment:true */
import DS from 'ember-data';

export default DS.Model.extend({
  invoiceName: DS.attr('string'),
  invoiceAmount: DS.attr('string')
});
