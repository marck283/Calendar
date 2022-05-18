var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('EventoPw', new Schema({ 
	data: String,  ora: String, durata: Number, maxPers: Number, categoria: String, nomeAtt: String, luogoEv: {indirizzo: String, citta: String}, organizzatoreID: String, partecipantiID: [String]}));