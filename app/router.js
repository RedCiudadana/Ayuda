import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('centro-acopio', function() {
    this.route('record', { path: '/:id' });
  });

  this.route('albergue', function() {
    this.route('record', { path: '/:id' });
  });
});

export default Router;
