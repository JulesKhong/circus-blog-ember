import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(comment, params) {
      this.sendAction('updateComment', comment, params);
    },
    deleteComment(comment) {
      this.sendAction('destroyComment', comment);
    }
  }
});
