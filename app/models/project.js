import DS from 'ember-data';

var Project = DS.Model.extend({
  title: DS.attr('string'),
  milestone: DS.attr('string'),
  deadline: DS.attr('date'),
  selectedDeadline: function(){
    var target = moment(this.get('deadline'));
    return target.format('DD-MM-YYYY');
  }.property('deadline'),
  userName: DS.belongsTo('user', {async:true}),
  isRed: DS.attr('boolean'),
  isAmber: DS.attr('boolean'),
  isGreen: DS.attr('boolean'),
  isEditing: DS.attr('boolean', {defaultValue: false})
});

export default Project;
