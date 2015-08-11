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
  this.route('archived-projects');
  this.route('new-invoice');
  this.route('leadstoclose');
  this.route('component');
  this.route('nav');
  this.route('hot-lead');
  this.route('all-revenue');
  this.route('on-hold');
});

export default Router;