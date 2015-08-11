import DS from 'ember-data';

export default DS.Model.extend({
	clienthold: DS.belongsTo('clienthold'),
	price: DS.attr('string')
});
