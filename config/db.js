require('dotenv').config();

// const mysql = require('mysql2/promise');
const {Pool} = require('pg');
 
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

pool.connect()
.then(() => console.log('Konekte'))
.catch(err => console.error('ere', err));

// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: { rejectUnauthorized: false }
// });


// pool.connect()
// .then(() => {
//   console.log('Konekte');
// })

// pool.on('error', (err) => {
//   console.error('ere', err);
// });

module.exports = { pool };
