import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      entries: this.store.findAll('entry')
    });
  },
  actions: {
    saveEntry() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author'),
        text: this.get('text'),
        teaser: this.get('teaser'),
        imgURL: this.get('imgURL'),
      }
      var newEntry = this.store.createRecord('entry', params);
      newEntry.save();
      this.transitionTo('index');
    }
  }
});
