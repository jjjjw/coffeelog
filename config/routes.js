module.exports = function(app){

	var note = require('../app/controllers/note');
	app.get('/', note.form);
  app.post('/note', note.set);
};
