import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  leadstoclose: {
	leadName: "",
    inputStatus: false
  },
  currentLeadPrice: '',
  leadsCurrentStatus: {
	  leadsReadOnly: false,
	  leadsNumberInput: false
  },
  actions: {
    createLeadToClose: function() {
		if(this.get('leadstoclose.leadName') === "") {
			alert('You have not entered any data!');
			return;
		}
		else {
  			this.set('leadsCurrentStatus.leadsReadOnly', true);
			var newLeadToClose = this.store.createRecord('leadstoclose', {
				leadName: this.get('leadstoclose.leadName')
			});
			var controller = this;
			newLeadToClose.save().then(function(){
				controller.set('leadstoclose.inputStatus', true);
				controller.set('leadsCurrentStatus.leadsReadOnly', true);
			});	
			this.set('model', newLeadToClose);
	     }	
    }, 	  
    createLeadInput: function() {
		if (this.get('currentLeadPrice') > 1) {
 		  this.set('leadsCurrentStatus.leadsReadOnly', true);
	  this.set('leadsCurrentStatus.leadsNumberInput', true);
	  var leadsClose = this.get('model');
	  var newLeadPrice = this.store.createRecord('leadstocloseprice', {
		  leadsPrice: this.get('currentLeadPrice')
	  }); 
	 leadsClose.get('leadstocloseprice').pushObject(newLeadPrice);
	  var controller = this;
	  newLeadPrice.save().then(function(){
		  controller.set('currentLeadPrice', '');
		  
      // Config for text colour.
      var configCreate = controller.store.find('config');
      if(configCreate.isPageEdited === true) {
        alert('test');
      }
      else { 
        var config = controller.get('controllers.application.model');
//        config.set('isPageEdited', true);
  //      config.save();
      }
		  //Check if config edit value is true, if it is - do nothing
      //If it is false, get the config object in a variable - var config = controller.get('controllers.application.model')
		  //set the edit value to true - config.set('isPageEdited', true)
      //Save the config object config.save()
	  });
	}
		else {
			alert('Please enter a valid number!');
 	   }
    },
	leadInputDone: function() {
		if(this.get('leadsCurrentStatus.leadsNumberInput') === false) {
			alert('You have not entered any amounts!');
		}	
		else {
			this.set('leadsCurrentStatus.leadsReadOnly', false);
			this.transitionTo('all-revenue');
		}
	},
  },
});