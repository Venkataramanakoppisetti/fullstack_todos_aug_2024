const { createTodo, getTodosByUserId, updateTodo, deleteTodo } = require('../models/todoModel');
const db = require('../config/db');

const addTodo = (req, res) => {
  const { description, status } = req.body;
  const userId = req.user.id;

  createTodo(userId, description, status, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error adding todo' });
    }

    // Fetch the newly created todo item
    db.get('SELECT * FROM todos WHERE rowid = last_insert_rowid()', (err, newTodo) => {
      if (err) {
        return res.status(500).json({ message: 'Error fetching new todo' });
      }
      res.status(201).json(newTodo);
    });
  });
};

const getTodos = (req, res) => {
  const userId = req.user.id;

  getTodosByUserId(userId, (err, todos) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching todos' });
    }
    res.json(todos);
  });
};

const updateTodoById = (req, res) => {
  const { id } = req.params;
  const { description, status } = req.body;

  updateTodo(id, description, status, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating todo' });
    }
    res.json({ message: 'Todo updated successfully' });
  });
};

const deleteTodoById = (req, res) => {
  const { id } = req.params;

  deleteTodo(id, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting todo' });
    }
    res.json({ message: 'Todo deleted successfully' });
  });
};

module.exports = { addTodo, getTodos, updateTodoById, deleteTodoById };
