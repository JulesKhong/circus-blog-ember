import Ember from 'ember';

export default Ember.Component.extend({
  updateEntryForm: false,
  actions: {
    updateEntryForm(){
      this.set('updateEntryForm', true);
    },
    update(entry) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        text: this.get('text'),
        teaser: this.get('teaser'),
        imgURL: this.get('imgURL'),
      };
      this.set('updateEntryForm', false);
      this.sendAction('update', entry, params);
    }
  }
});
