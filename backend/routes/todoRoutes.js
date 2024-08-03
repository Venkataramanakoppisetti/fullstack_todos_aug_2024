const express = require('express');
const { addTodo, getTodos, updateTodoById, deleteTodoById } = require('../controllers/todoController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/todos', authMiddleware, addTodo);
router.get('/todos', authMiddleware, getTodos);
router.put('/todos/:id', authMiddleware, updateTodoById);
router.delete('/todos/:id', authMiddleware, deleteTodoById);

module.exports = router;
