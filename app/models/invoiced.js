/* global moment:true */
import DS from 'ember-data';

export default DS.Model.extend({
  invoicedNameAmount: DS.attr('array')
});
