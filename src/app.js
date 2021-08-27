
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

//seting
app.set('port', process.env.PORT || 3000);


//middleware
app.use(express.json({limit: "30mb", extended: true}));
app.use(cors());
app.use(morgan('combined'));

//routes
app.use(require('./routes/tareas_routes'));

module.exports = app;