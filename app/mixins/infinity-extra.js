import Ember from 'ember';

export default Ember.Mixin.create({
  perPageParam: 'page_size', // instead of "per_page"
  totalPagesParam: "meta.total", // instead of "meta.total_pages"
});
