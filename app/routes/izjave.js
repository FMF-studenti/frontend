import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  titleToken: 'Izjave',
  perPageParam: 'page_size',        // instead of "per_page"
  totalPagesParam: "meta.total",    // instead of "meta.total_pages"
  model() {
    return this.infinityModel('quote', { perPage: 12, startingPage: 1 });
  }
});
