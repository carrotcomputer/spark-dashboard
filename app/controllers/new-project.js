import Ember from 'ember';

export default Ember.Controller.extend({
  lStatus:["Red","Amber","Green"],
  actions: {
    createProject: function(){
      var title       = this.get("projectTitle");
      var milestone   = this.get("projectMilestone");
      var deadline    = this.get('deadline');
      var username    = this.get('username');
      var statusLight = this.get('lightStatus');
      
      var project = this.store.createRecord('project', {
        title: title,
        milestone: milestone,
        deadline: deadline,
        userName: username,
        lightStatus: statusLight
      });
      
      project.save();
            
            
      this.set('projectTitle', '');
      this.set('projectMilestone', '');
      this.set('deadline', '');
      this.set('username', '');
      
      
      //this.store.find(''), params.project_id);..will get the data
      //this.transitionTo('current-project');
    }
  }
});