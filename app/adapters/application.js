import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'fmf/config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  host: ENV.APP.backendUri,
  authorizer: 'authorizer:oauth2',
  shouldReloadAll: function() {
    return true;
  }
});
