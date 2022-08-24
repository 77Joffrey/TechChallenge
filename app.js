const express = require("express");
const connection = require("./DB_connection");
const addressRoutes = require('./routes/address_routes')
const dbStructureRoutes = require('./routes/DB_structure_routes')
const bestCustomersRoutes = require('./routes/best_customers_routes')

const app = express();

app.use(express.json());

app.use('/api/dataengineer', addressRoutes)
app.use('/api/DB_structure', dbStructureRoutes)
app.use('/api/dataengineer', bestCustomersRoutes)

module.exports = app;
