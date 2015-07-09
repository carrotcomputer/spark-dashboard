import DS from 'ember-data';

var Project = DS.Model.extend({
  title: DS.attr('string'),
  milestone: DS.attr('string'),
  deadline: DS.attr('string'),
  userName: DS.attr('string'),
  lightStatus: DS.attr('string')
});

export default Project;
