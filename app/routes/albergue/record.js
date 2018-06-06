import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(parameters) {
    return RSVP.hash({
      applicationModel: this.modelFor('application'),
      albergue: this.modelFor('application')
        .albergues
        .findBy('id', parameters.id)
    })
  }
});
