const sqlite3 = require('sqlite3').verbose(); // Here verbose() is used for enhanced debugging.
const db = new sqlite3.Database('./database.db');

db.serialize(() => {   // Here serialize() is used for sequential execution of database operations.
  // Creating users table
  db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )
`, (err) => {
  if (err) {
    console.error('Error creating users table:', err.message);
  }
});

// Creating todos table
db.run(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    description TEXT,
    status TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id)
  )
`, (err) => {
  if (err) {
    console.error('Error creating todos table:', err.message);
  }
});
});
db.close();
