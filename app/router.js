import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authors');
  this.route('izjave');
  this.route('zapiski', function() {
    this.route('list');
    this.route('register');
    this.route('help');
    this.route('upload');
  });
});

export default Router;
