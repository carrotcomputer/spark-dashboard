import Ember from 'ember';

export default Ember.Controller.extend({
  users: "",
  activeUsers: function(){
    var users = this.get('users');
    var filteredUsers = users.filterBy('isRemoved', false);
    
    return filteredUsers;
    
  }.property('users.@each.isRemoved'),
  actions: {
    deleteCard: function(proj){
      if(confirm("Are you sure you want to remove " +  proj.get('title') + "?")){
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
      this.set('users', this.store.find('user'));
      proj.set('isEditing', true);
    },
    acceptChanges: function(proj) {
      if(proj.get('milestone') !== ""){
        proj.setProperties({
          milestone: proj.get('milestone'),
          deadline: new Date(proj.get('deadline')),
          userName: this.get('username')
        });
      }
      proj.set('isEditing', false);
      proj.save();
    }
  }
});
Ember.Handlebars.registerBoundHelper('date', function (date){
    var target = moment(date);
    return target.format('DD/MM/YY');
});
