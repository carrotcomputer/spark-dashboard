import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteCard: function(proj){
      if(confirm("You are about to remove this project (" +  proj.get('title') + ")?")){
        proj.deleteRecord();
        proj.save();
      }
    },
    setRed: function(proj) {
      proj.setProperties({
        isRed: true,
        isAmber: false,
        isGreen: false
      });
      proj.save();
    },
    setAmber: function(proj) {
      proj.setProperties({
        isRed: false,
        isAmber: true,
        isGreen: false
      });
      proj.save();
    },
    setGreen: function(proj) {
      proj.setProperties({
        isRed: false,
        isAmber: false,
        isGreen: true
      });
      proj.save();
    },
    editMilestone:function(proj){
      proj.set('isEditing', true);
    },
    acceptChanges: function(proj) {
      /*var projects = this.get('model');
      
      projects.filter(projects, function(){
        if(project.get('isEditing')){
          return true
        }
      });
      */
      
      if(!(Ember.isEmpty(this.get('proj.milestone')))){
        proj.setProperties({
          milestone: this.get('proj.milestone'),
          deadline: this.get('proj.deadline'),
          userName: this.get('proj.userName')
        });
      }
      
      proj.set('isEditing', false)
      proj.save();
    }
  }
});
