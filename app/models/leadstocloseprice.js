import DS from 'ember-data';

export default DS.Model.extend({
	leadstoclose: DS.belongsTo('leadstoclose'),
	leadsPrice: DS.attr('string')
});
