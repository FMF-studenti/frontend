import Oauth2 from 'torii/providers/oauth2-code';
import {configurable} from 'torii/configuration';

var FmfOauth2 = Oauth2.extend({
  name:       'fmf-oauth2',
  baseUrl:    configurable('baseUri'),

  responseParams: ['code'],

  state: 'STATE',

  redirectUri: configurable('redirectUri', function(){
    // A hack that allows redirectUri to be configurable
    // but default to the superclass
    return this._super();
  })
});

export default FmfOauth2;
