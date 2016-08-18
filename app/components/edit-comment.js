import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    update(comment) {
      var params = {
        userName: this.get('userName') ? this.get('userName'): "",
        text: this.get('text') ? this.get('text'): "",
      };
      this.set('updateCommentForm', false);
      this.sendAction('update', comment, params);
    },
    updateCommentForm(){
      this.set("updateCommentForm", true);
    },
    deleteComment(comment) {
      if(confirm('Are you sure you want to delete your comment?')){
        this.sendAction('deleteComment', comment);
      }
    }
  }
});
