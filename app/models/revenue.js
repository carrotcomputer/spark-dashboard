import DS from 'ember-data';

export default DS.Model.extend({
	currentTarget: DS.attr('number'),
	invoiced: DS.attr('number'),
	remaining: DS.attr('number'),
  dateCreated: DS.attr('string'),
  
  getMonth: function(){
    var target = moment(this.get('dateCreated'));
    return target.format('MMMM');
  }.property('dateCreated'),
});
