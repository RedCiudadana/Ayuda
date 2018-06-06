import Route from '@ember/routing/route';

export default Route.extend({

  spreadsheet: Ember.inject.service(),

  model() {
    const spreadsheetService = this.get('spreadsheet');

    Ember.RSVP.hash({
      centrosAcopio: this.store.fetch('centro-acopio').then((centros) => {
        console.log(centros);
      })
    });
  }
});
