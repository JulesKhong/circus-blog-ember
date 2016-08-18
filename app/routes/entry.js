import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('entry', params.entry_id);
  },
  actions: {
    update(entry, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!== undefined) {
          entry.set(key,params[key]);
        }
      });
      entry.save();
      this.transitionTo('index');
    },
    updateComment(comment, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!== undefined) {
          comment.set(key,params[key]);
        }
      });
      comment.save();
      this.transitionTo('entry', model);
    },
    destroyEntry(entry) {
      entry.destroyRecord();
      this.transitionTo('index');
    },
    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('entry', model);
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var entry = params.entry;
      entry.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return entry.save();
      });
      this.transitionTo('entry', entry);
    },
  }
});
