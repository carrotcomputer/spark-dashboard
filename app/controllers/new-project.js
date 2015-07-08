import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createProject: function(){
      var title     = this.get("projectTitle");
      var milestone = this.get("projectMilestone");
      
      if(!title && !milestone){
        return false;
      }
      
      var project = this.store.createRecord('project', {
        title: title,
        milestone: milestone,
      });
      
      this.set('projectTitle', '');
      this.set('projectMilestone', '');
      
      project.save();
    }
  }
});