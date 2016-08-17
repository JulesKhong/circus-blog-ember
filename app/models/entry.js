import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  text: DS.attr(),
  teaser: DS.attr(),
  imgUrl: DS.attr()
});
