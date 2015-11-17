import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  metrics: Ember.inject.service(),

  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  _trackPage() {
    Ember.run.scheduleOnce('afterRender', this, () => {
      const page = document.location.pathname;
      const title = this.getWithDefault('currentRouteName', 'unknown');

      Ember.get(this, 'metrics').trackPage({
        page, title
      });
    });
  }
});

Router.map(function() {
  this.route('authors');
  this.route('quotes', {
    path: '/izjave'
  }, function() {
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
  this.route('error-404', {
    path: '/*path'
  });
  this.route('cookies', {});
});

export default Router;
