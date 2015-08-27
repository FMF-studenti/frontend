import DS from 'ember-data';
import ENV from 'fmf/config/environment';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: ENV.APP.backendUri,
  shouldReloadAll: function() {
    return true;
  }
});
