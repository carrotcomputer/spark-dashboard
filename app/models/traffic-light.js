import DS from 'ember-data';

var TrafficLight = DS.Model.extend({
  title: DS.attr('string'),
  deadline: DS.attr('string'),
  userName: DS.attr('string'),
  lightStatus: DS.attr('int')
});

export default TrafficLight;
