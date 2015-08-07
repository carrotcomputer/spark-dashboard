import Ember from 'ember';

export default Ember.Controller.extend({
  hotlead: {
    hotLeadName: ""
  },
  actions: {
    createHotLead: function() {
      if(this.get('hotlead.hotLeadName') === "") {
        alert("Please enter the Name of Company!");
      } 
    else {
    var newHotLead = this.store.createRecord('hotlead', {
      hotLeadName: this.get('hotlead.hotLeadName')
      });
       var controller = this;
        newHotLead.save().then(function(){
        controller.transitionTo('all-revenue');
      });
      } 
    },
  },
});
