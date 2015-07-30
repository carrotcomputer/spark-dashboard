/* global moment:true */
import Ember from 'ember';

export default Ember.Controller.extend({
  currentTarget: "",
  currentRevenue: "",
  remaining: "",
  invoiced: "",
  revenue: "",
  users: "",
  isEditMode: false,
  sortProperties: ['position'],
  sortAcsending: true,
	getRevenue: function() {
		this.set('revenue', this.store.find('revenue'));	
	},
  
  checkEditMode: function(data) {
    var newRevenue = this.store.find('revenue');
    if(newRevenue.get('currentTarget') > 0 && newRevenue.get('invoiced') > 0)
    {
      newRevenue.set('isRevenueEditMode', false);
    }
    else {
      newRevenue.set('isRevenueEditMode', true);
    }
  },
  
  activeUsers: function(){
    var users = this.get('users');
    var filteredUsers = users.filterBy('isRemoved', false);
    
    return filteredUsers;
    
  }.property('users.@each.isRemoved'),
  actions: {
    editMode: function() {
      this.set('isEditMode', true);
    },
    exitEditMode: function() {
      this.set('isEditMode', false);
    },
    reOrder: function(groupModel) {
      for(var i=0; i < groupModel.length; i++){
        groupModel[i].set('position', i);
        groupModel[i].save();
      }
      
      this.set('model', groupModel);
	},

    deleteCard: function(proj){
      if(confirm("Are you sure you want to remove " +  proj.get('title') + "?")){
        proj.deleteRecord();
        proj.save().then(function(){
        });
      }
    },
	editRevenue: function() {
    var currentRevenue = this.get('revenue');
		currentRevenue.set('isRevenueEditMode', true);
	}, 
	addRevenue: function() {
    if (this.get('revenue.currentTarget') > 0 && this.get('revenue.invoiced') > 0)
    {
      var currentRevenue = this.get('revenue');
      currentRevenue.set('dateCreated', new Date());
      currentRevenue.set('isRevenueEditMode', false);
      currentRevenue.save();
  		}
    else {
      var currentRevenue = this.get('revenue');
      currentRevenue.set('isRevenueEditMode', true);
      alert('You must enter a correct Target / Invoice Amount!');    
    }
   },
  
    archive: function(proj){
      proj.set('isLive', false);
      proj.save();
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
    editMilestone: function(proj) {
      this.set('users', this.store.find('user'));
      proj.set('isEditing', true);
    },
    newMilestone: function(proj) {
      var newMilestone = this.store.createRecord('milestone', {
        details: proj.get('milestones.lastObject.details'),
        deadline: new Date(proj.get('milestones.lastObject.deadline')),
        user: this.get('username'),
        project: proj
      });
      
      newMilestone.save();
      
      proj.set('isEditing', false);
      proj.save();
    },
    back:function(proj){
      proj.set('isEditing', false);
    },
    acceptChanges: function(proj) {
      if(proj.get('milestones.lastObject.details') !== ""){
        proj.get('milestones.lastObject').setProperties({
          details: proj.get('milestones.lastObject.details'),
          deadline: new Date(proj.get('milestones.lastObject.deadline')),
          user: this.get('username'),
        });
        proj.get('milestones.lastObject').save();
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
