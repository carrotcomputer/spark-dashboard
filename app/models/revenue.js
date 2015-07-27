import DS from 'ember-data';

export default DS.Model.extend({
	currentTarget: DS.attr('string'),
	invoiced: DS.attr('string'),
	remaining: DS.attr('string')
});
