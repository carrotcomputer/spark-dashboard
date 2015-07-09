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
      
      var isRed   = false;
      var isAmber = false;
      var isGreen = false;
      
      if(statusLight === "Red"){
        isRed = true;
        isAmber = false;
        isGreen = false;
      }else if(statusLight === "Amber"){
        isAmber = true
        isRed = false;
        isGreen = false;
      }else{
        isGreen = true;
        isAmber = false;
        isRed 
      }
      
      var project = this.store.createRecord('project', {
        title: title,
        milestone: milestone,
        deadline: deadline,
        userName: username,
        isRed: isRed,
        isAmber: isAmber,
        isGreen: isGreen
        
      });
      
      project.save();
            
            
      this.set('projectTitle', '');
      this.set('projectMilestone', '');
      this.set('deadline', '');
      this.set('username', '');
      
      //this.transitionTo('current-project');
    }
  }
});