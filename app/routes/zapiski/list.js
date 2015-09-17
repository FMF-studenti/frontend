import Ember from 'ember';
import InfinityRoute from 'ember-infinity/mixins/route';
import InfinityExtra from 'fmf/mixins/infinity-extra';

export default Ember.Route.extend(InfinityRoute, InfinityExtra, {
  setupController(controller, model) {
    controller.set('model', model);
    controller.set('filters', this.modelFor('zapiski'));
  },
  model() {
    return this.infinityModel('note', { perPage: 12, startingPage: 1 });
  },
  actions: {
    filtersChanged(filters) {
      console.log(filters);
    }
  }
});
