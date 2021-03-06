import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  time: DS.attr(),
  respuesta: DS.attr(),
  pregunta: DS.belongsTo('question', { async: true }),
});
