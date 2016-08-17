import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveEntry() {
      var params = {
        author: this.get('author') ? this.get('author'): "",
        title: this.get('title') ? this.get('title'): "",
        text: this.get('text') ? this.get('text'): "",
        teaser: this.get('teaser') ? this.get('teaser'): "",
        imgURL: this.get('imgURL') ? this.get('author'): ""
      };
      this.sendAction('saveEntry', params);
    }
  }
});
