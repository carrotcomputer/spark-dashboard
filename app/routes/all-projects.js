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
  }
});
