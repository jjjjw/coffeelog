var mongoose = require('mongoose')
  , Note = mongoose.model('Note')
  , NoteDisplaySchema = require('../models/note').NoteDisplaySchema

module.exports = {
  form: function(req, res) {
    res.render('note/form', {fields: NoteDisplaySchema});
  },

  set: function(req, res) {
    var note = new Note(req.params.note);
    note.save(function(err, note) {
      if (err) {
        res.send(500);
      }
      res.send(200);
    })
  }
}
