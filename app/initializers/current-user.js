import Session from "simple-auth/session";

export default {
  name: "current-user",
  before: "simple-auth",
  initialize: function(container) {
    Session.reopen({
      setCurrentUser: function() {
        if (this.get('isAuthenticated')) {
          return container.lookup('service:store').findRecord('user', 'me').then((user) => {
            this.set('content.currentUser', user);
          });
        }
      }.observes('isAuthenticated')
    });
  }
};
