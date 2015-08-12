import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('config').then(function(data){
      return data.get('firstObject');
    })
  },
  afterModel: function(){
    this.transitionTo('all-projects');
  }
});
