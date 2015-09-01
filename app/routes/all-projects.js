import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
    return this.store.find('project');
	},

  renderTemplate: function(){
    this.render('nav', {
      into: 'application',
      outlet: 'nav',
      controller: 'nav'
    });

    this.render();
  },
  setupController: function(controller){
    controller.set('invoiced', controller.store.find('invoiced'));
    controller.set('hotlead', controller.store.find('hotlead'));
    
    controller.store.find('config').then(function(data) {
     if(data.content.length === 0 || data.content.length === null) {
      var configCreate = controller.store.createRecord('config', {
        isPageEdited: true,
        isPageEditedTime: "",
        getPageEditTime: 0,
        isCreated: false
      });
      configCreate.save().then(function(data) {
        controller.set('config',data);
        controller.transitionTo('all-projects');
      });
    }
    else {
    controller.set('config', data.get('firstObject'));
    controller.store.find('config').then(function(data){
      controller.set('config', data.get('firstObject'));
    });
    }
  });

    this.store.find('revenue').then(function(data) {
      if(data.content.length === null || data.content.length === 0){
    		var newRevenue = controller.store.createRecord('revenue', {
    			currentTarget: 0,
    			invoiced: 0,
          invoiceAmount: 0,
          isRevenueEditMode: true
    		});
        newRevenue.save().then(function(data){
          controller.set('revenue', data);
        });
      } else {
        controller.set('revenue', data.get('firstObject'));
        controller.store.find('revenue').then(function(data){
          controller.set('revenue', data.get('firstObject'));
          controller.set('revenue.isRevenueEditMode', false);
        });
      }
  	},
    function() {
      alert('It looks like there is no internet connection. Please check later.');
    }
  );
  }
});