const sqlite3 = require('sqlite3').verbose();

// Connecting to the Database
const db = new sqlite3.Database('database.db', (err) => {
  //If the connection fails
  if (err) {
    console.error('Error opening database:', err.message);
    //If the connection get success
  } else {
    console.log('Connected to the SQLite database.');
  }
});
module.exports = db;
