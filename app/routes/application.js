import Route from '@ember/routing/route';

export default Route.extend({

  spreadsheet: Ember.inject.service(),

  model() {
    const spreadsheetService = this.get('spreadsheet');

    return Ember.RSVP.hash({
      centrosAcopio: spreadsheetService.fetch('centro-acopio'),
      albergues: spreadsheetService.fetch('albergue')
    });
  }
});
