import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  query: null,

  searchProperties: ['nombre', 'municipio', 'recursosPrioritarios']
});
