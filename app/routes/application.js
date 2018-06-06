import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  spreadsheet: Ember.inject.service(),

  model() {
    const spreadsheetService = this.get('spreadsheet');

    return RSVP.hash({
      centrosAcopio: spreadsheetService.fetch('centro-acopio'),
      albergues: spreadsheetService.fetch('albergue')
    });
  }
});
