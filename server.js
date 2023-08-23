require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon');
const APokemon = require('./models/APokemonn');
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;

app.use(express.urlencoded({ extended: true }));
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', "jsx");
app.engine('jsx', require('express-react-views').createEngine());

// INDEX
app.get("/", (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
    APokemon.find({})
        .then(arrayOfPokemon => {
            res.render('Index', {pokemon: arrayOfPokemon});
        })
        .catch(error => {
            console.error(error);
        })
});

// NEW
app.get('/pokemon/add', (req, res) => {
    res.render('New');
});

// DELETE


// UPDATE


// CREATE
app.post('/pokemon', (req, res) => {
    console.log(req.body)
    APokemon.create(req.body)
        .then(addedPokemon => {
            res.redirect('/pokemon');
        })
        .catch(error => {
            console.error(error)
        })
})

// EDIT


// SHOW
app.get('/pokemon/:id', (req, res) => {
    APokemon.findOne({_id: req.params.id})
        .then(selectedPokemon => {
            console.log(selectedPokemon)
            res.render('Show', {choice: selectedPokemon})
        })
        .catch(error => {
            console.error(error);
        })
});

app.listen(port, () => {
    console.log('sever is running');
});