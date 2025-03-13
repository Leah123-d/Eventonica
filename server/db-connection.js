require('dotenv').config();
const { Pool } = require ('pg');

const Client = new Pool({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD
});

Client.connect()
    .then(() => console.log("connected to the database"))
    .catch(err => console.error("connection error", err));


module.exports = Client;
