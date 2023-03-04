const express = require('express');
const cors = require('cors');
const app = express();


const AssociationsRoute = require('./routes/associations');
const EventsRoute = require('./routes/events');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.use('/api/associations', AssociationsRoute);
app.use('/api/events', EventsRoute);


module.exports = app; 

