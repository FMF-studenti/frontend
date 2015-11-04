import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authors');
  this.route('izjave', function() {
    this.route('add');
    this.route('quote', {
      path: ':quote_id'
    });
    this.route('edit', {
      path: ':quote_id/edit'
    });
    this.route('loading');
  });
  this.route('notes', {
    path: '/zapiski'
  }, function() {
    this.route('list', function() {
      this.route('loading');
    });
    this.route('register');
    this.route('register-file', {
      path: 'register/:file_id'
    });
    this.route('help');
    this.route('upload');
    this.route('loading');
  });
  this.route('logout');
});

export default Router;
