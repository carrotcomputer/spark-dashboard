import DS from 'ember-data';

var Project = DS.Model.extend({
  rev: DS.attr('string'),
  title: DS.attr('string'),
  milestone: DS.hasMany('milestone', {async: true}),
  
  isRed: DS.attr('boolean'),
  isAmber: DS.attr('boolean'),
  isGreen: DS.attr('boolean'),
  
  isEditing: DS.attr('boolean', {defaultValue: false}),
  position: DS.attr('number', {defaultValue: 0}),
  isLive: DS.attr('boolean', {defaultValue: true}),
  
});

export default Project;
