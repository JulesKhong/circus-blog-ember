import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('about');
  this.route('contact');
  this.route('entry', {path: '/entry/:entry_id'});
  this.route('new-entry');
});

export default Router;
