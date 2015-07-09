import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteCard: function(proj){
      
      if(confirm("You are about to remove this project (" +  proj.get('title') + ")?")){
        proj.deleteRecord();
        proj.save();
      }
    }
  }
});
