import DS from 'ember-data';

var User = DS.Model.extend({
  userName: DS.attr('string'),
  isEditing: DS.attr('boolean', {defaultValue: false}),
  isRemoved: DS.attr('boolean', {defaultValue: false})
});

export default User;

