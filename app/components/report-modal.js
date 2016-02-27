import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    approveModal: function() {
      let type = this.$.find('input[name=item-type]').val();
      let number = this.$.find('input[name=item-number]').val();
      let content = this.$.find('input[name=item-content]').val();

      console.log(type, number, content);
    }
  }
});
