/* global moment:true */
import DS from 'ember-data';

export default DS.Model.extend({
  invoicedClient: DS.attr('array')
});
