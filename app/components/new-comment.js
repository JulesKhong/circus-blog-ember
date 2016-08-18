import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        userName: this.get('userName') ? this.get('userName'): "",
        text: this.get('text') ? this.get('text'): "",
        entry: this.get('entry')
      };
      this.sendAction('saveComment', params);
    }
  }
});
