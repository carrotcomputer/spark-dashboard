import DS from 'ember-data';

var Project = DS.Model.extend({
  title: DS.attr('string'),
  milestone: DS.attr('string'),
  deadline: DS.attr('date'),
  userName: DS.attr('string'),
  isRed: DS.attr('boolean'),
  isAmber: DS.attr('boolean'),
  isGreen: DS.attr('boolean'),
  isEditing: DS.attr('boolean', {defaultValue: false})
});

export default Project;
