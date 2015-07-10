import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function(){
    this.render('nav', {
      into: 'application',
      outlet: 'nav',
      controller: 'nav'
    });

    this.render();
  }
});
