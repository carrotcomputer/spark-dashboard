import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editUser: function(usr){
      usr.set('isEditing', true);
    },
    acceptChanges: function(usr) {
      if(!(Ember.isEmpty(usr.get('userName')))){
        usr.setProperties({
          username: usr.get('userName')
        });
      }
      usr.set('isEditing', false);
      usr.save();
    },
    deleteUser: function(usr){
      if(confirm("Are you sure you want to delete the user " +  usr.get('userName') + "?")){
        usr.set('isRemoved', true);
        usr.save();
      }
    }
  }
});
