import Ember from 'ember';

export default Ember.Controller.extend({
  lStatus:["Red","Amber","Green"],
  isError:false,
  project: {
    title: "",
    milestone: "",
    deadline: "",
    username: "",
    lightStatus: ""
  },
  activeUsers: function(){
    var users = this.get('model');
    var filteredUsers = users.filterBy('isRemoved', false);
    
    return filteredUsers;
    
  }.property('model.@each.isRemoved'),
  actions: {
    createProject: function(){
      var title       = this.get("projectTitle");
      var details   = this.get("projectMilestone");
      var deadline    = new Date(this.get('deadline'));
      var username    = this.get('username');
      var statusLight = this.get('lightStatus');
      
      if(title && details && deadline && username && statusLight){
        var isRed   = false;
        var isAmber = false;
        var isGreen = false;
      
        if(statusLight === "Red"){
          isRed   = true;
          isAmber = false;
          isGreen = false;
        }else if(statusLight === "Amber"){
          isAmber = true;
          isRed   = false;
          isGreen = false;
        }else{
          isGreen = true;
          isAmber = false;
          isRed   = false;
        }
        
        var controller = this;
        var project = this.store.createRecord('project', {
          title: title,
          isRed: isRed,
          isAmber: isAmber,
          isGreen: isGreen
        
        });
        
        var newMilestone = controller.store.createRecord('milestone', {
          details: details,
          deadline: deadline,
          user: username,
          project: project
        });
        
        newMilestone.save();
                
        project.set('milestone', newMilestone);
        project.save();
        
            
        this.set('projectTitle', '');
        this.set('projectMilestone', '');
        this.set('deadline', '');
        this.set('username', '');
        
        this.set('isError',false);
        this.transitionTo('all-projects');
        
      }else{
        this.set('isError', true);
      }
    }
  }
});