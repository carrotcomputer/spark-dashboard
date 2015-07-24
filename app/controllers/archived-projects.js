import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteCard: function(proj){
      if(confirm("Are you sure you want to remove " +  proj.get('title') + "?")){
        proj.deleteRecord();
        proj.save();
      }
    },
    setLive: function(proj) {
      proj.set('isLive', true);
      proj.save();
    }
  }
});
