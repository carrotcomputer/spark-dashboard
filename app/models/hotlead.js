import DS from 'ember-data';

export default DS.Model.extend({
  hotLeadName: DS.attr('string'),
  isEditHotLead: DS.attr('boolean', {defaultValue: false})
});
