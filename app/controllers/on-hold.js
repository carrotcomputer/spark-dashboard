import Ember from 'ember';

export default Ember.Controller.extend({
  clienthold: {
  onholdname: "",
  buttonStatus: false
  },
  currentPrice: '',
  checkStatus: {
  	readOnlyStatus: false,
	viewNumberInput: false  
  },

  actions: {
    createClientOnHold: function() {
		
	if(this.get('clienthold.onholdname') === ""){
		alert('You have not entered any data!');
		return;
	}
	else {
	  this.set('checkStatus.readOnlyStatus', true);
      var newClientHold = this.store.createRecord('clienthold', {
        onholdname: this.get('clienthold.onholdname')
      });
      var controller = this;
      newClientHold.save().then(function(){
        controller.set('clienthold.buttonStatus', true);
		controller.set('checkStatus.readOnlyStatus', true);
      });
	  
	  this.set('model', newClientHold);
  }
    },
    createInput: function() {
		
		if (this.get('currentPrice') === "") {
			alert('You have not entered any amounts!');
		}
		
		else {
		this.set('checkStatus.readOnlyStatus', true);
		this.set('checkStatus.viewNumberInput', true);
		
        var onHold = this.get('model');
		
		var newPrice = this.store.createRecord('clientholdprice', {
			price: this.get('currentPrice')
        });
		
		onHold.get('clientholdprice').pushObject(newPrice);
		var controller = this;
		newPrice.save().then(function(){
			controller.set('currentPrice', '');
		});
	  }
    },
	
	onHoldDone: function() {
		if (this.get('checkStatus.viewNumberInput') === false) {
			alert('You have not entered any amounts!');
		}
		
		else {
		this.set('checkStatus.readOnlyStatus', false);
		this.transitionTo('all-revenue');
		}
	},
  },
});