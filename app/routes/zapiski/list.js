import Ember from 'ember';
import InfinityRoute from 'ember-infinity/mixins/route';
import InfinityExtra from 'fmf/mixins/infinity-extra';

export default Ember.Route.extend(InfinityRoute, InfinityExtra, {
  titleToken: 'Seznam',

  queryParams: {
    department: {
      replace: true,
      refreshModel: true
    },
    level: {
      replace: true,
      refreshModel: true
    },
    year: {
      replace: true,
      refreshModel: true
    },
    subject: {
      replace: true,
      refreshModel: true
    }
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('filters', this.modelFor('zapiski'));
  },

  model: function(params) {
    var properties = {
      perPage: 12,
      startingPage: 1
    };

    if (params.department) {
      properties['subject__department'] = params.department;
    }
    if (params.level) {
      properties['subject__level'] = params.level;
    }
    if (params.year) {
      properties['subject__year'] = params.year;
    }
    if (params.subject) {
      properties['subject'] = params.subject;
    }

    return this.infinityModel('note', properties);
  }
});
