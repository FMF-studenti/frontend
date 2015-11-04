import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  modelNameFromPayloadKey: function(payloadKey) {
    return this._super('notes/' + payloadKey);
  },

  payloadKeyFromModelName: function(modelName) {
    return this._super(modelName.replace('notes/', ''));
  }
});
