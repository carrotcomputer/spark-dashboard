import Ember from 'ember';

export default Ember.Controller.extend({
  isError: false,
  actions: {
    addUser: function(){
      var uName = this.get('name');
      
      if(!uName){
        this.set('isError', true);
      }else{
        this.set('isError',false);
        
        var user = this.store.createRecord('user', {
            userName: uName
        });
      
        user.save();
      
        this.set('name', '');
        this.transitionTo('all-projects');
    }
    }
  }
});
