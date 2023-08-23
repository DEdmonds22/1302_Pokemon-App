const {Schema, model} = require('mongoose');

const aPokemonSchema = new Schema({
    name: { type: String, required: true },
    img: { type: String, required: false }
});

const APokemon = model('pokemon', aPokemonSchema);

module.exports = APokemon;