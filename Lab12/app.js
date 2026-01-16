const express  = require('express');
const adminRoutes = require('./src/routes/Admin.route.js');

const app = express();

app.use(express.json());
app.use('/admin',adminRoutes);

module.exports = app;