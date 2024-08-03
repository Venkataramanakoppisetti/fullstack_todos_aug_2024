const db = require('../config/db');

const createTodo = (userId, description, status, callback) => {
  db.run('INSERT INTO todos (user_id, description, status) VALUES (?, ?, ?)', [userId, description, status], callback);
};

const getTodosByUserId = (userId, callback) => {
  db.all('SELECT * FROM todos WHERE user_id = ?', [userId], callback);
};

const updateTodo = (id, description, status, callback) => {
  db.run('UPDATE todos SET description = ?, status = ? WHERE id = ?', [description, status, id], callback);
};

const deleteTodo = (id, callback) => {
  db.run('DELETE FROM todos WHERE id = ?', [id], callback);
};

module.exports = { createTodo, getTodosByUserId, updateTodo, deleteTodo };
