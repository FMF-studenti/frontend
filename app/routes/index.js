import Ember from 'ember';
import ENV from 'fmf/config/environment';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      topics: this.store.findAll('topic'),
      articles: this.store.findAll('blogArticle'),
      notes: this.store.find('note', {
        'page_size': 6
      }),
      quotes: Ember.$.getJSON(ENV.APP.backendUri + '/api/quotes/latest_and_random').then(function(response) {
        response.quotes[1]['random'] = true;
        return response.quotes;
      }),
      links: this.store.all('externalLink')
    });
  }
});
