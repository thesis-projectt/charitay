const express = require('express');
const cors = require('cors');
const app = express();


const AssociationsRoute = require('./routes/associations');
const EventsRoute = require('./routes/events');
const volunteer =require('./routes/volunteer')
const disable = require('./routes/disable')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.use('/api/associations', AssociationsRoute);
app.use('/api/events', EventsRoute);
app.use('/api/volunteer', volunteer);
app.use('/api/disable', disable);

module.exports = app; 

