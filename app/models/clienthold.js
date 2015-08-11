import DS from 'ember-data';

export default DS.Model.extend({
  onholdname: DS.attr('string'),
  clientholdprice: DS.hasMany('clientholdprice'),
	checkStatus: {
	readOnlyStatus: DS.attr('boolean', {defaultValue: false})
	}
  });

