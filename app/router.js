import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard');
  this.route('new-project');
  this.route('current-project');
  this.route('traffic-light');
  this.route('all-projects');
  this.route('new-user');
  this.route('all-users');
});

export default Router;