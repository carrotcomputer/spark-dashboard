import DS from 'ember-data';

export default DS.Model.extend({
  details: DS.attr('string'),
  deadline: DS.attr('date'),
  user: DS.belongsTo('user', {async: true}),
  selectedDeadline: function(){
    var target = moment(this.get('deadline'));
    return target.format('DD/MM/YYYY');
  }.property('deadline'),
  project: DS.belongsTo('project', {async: true})
});
