import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveEntry() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        text: this.get('text'),
        teaser: this.get('teaser'),
        imgURL: this.get('imgURL')
      };
      this.sendAction('saveEntry', params)
    }
  }
});
