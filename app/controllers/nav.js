import Ember from 'ember';

export
default Ember.Controller.extend({
  formattedDate: function(){
    var date = new Date();
      return moment(date).format("MMMM Do YYYY");
  }.property('date')
});