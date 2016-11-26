import Ember from 'ember';
import ENV from 'fmf/config/environment';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    approveModal: function() {
      const type = this.$('input[name=item-type]').val();
      const number = this.$('input[name=item-number]').val();
      const content = this.$('input[name=item-content]').val();

      console.log(type, number, content);

      this.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
        const data = {
          title: 'Title',
          content: '1234567890 1234567890'
        };

        const headers = {};
        headers[headerName] = headerValue;
        Ember.$.ajax(ENV.APP.backendUri + '/api/pm', { headers: headers, method: 'POST', data: data });
      });
    }
  }
});
