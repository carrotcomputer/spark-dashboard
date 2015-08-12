import DS from 'ember-data';

export default DS.Model.extend({
  leadName: DS.attr('string'),
  leadstocloseprice: DS.hasMany('leadstocloseprice'),
   
  leadsCurrentStatus: {
		leadsReadOnly: DS.attr('boolean', {defaultValue: false})
	} 
});
