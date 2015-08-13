import DS from 'ember-data';

export default DS.Model.extend({
  leadName: DS.attr('string'),
  leadstocloseprice: DS.hasMany('leadstocloseprice'),
  isLeadToCloseEdit: DS.attr('boolean', {defaultValue: false}),
   
  leadsCurrentStatus: {
		leadsReadOnly: DS.attr('boolean', {defaultValue: false})
	} 
});
