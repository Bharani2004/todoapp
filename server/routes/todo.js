const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo')
const { authenticate }  = require('../middlewares/authMiddleware')



router.get('/', todoController.getAllTodos)


router.post('/', todoController.createTodo)


router.patch('/:id', todoController.updateTodo)


//router.delete('/:id',authenticate, todoController.deleteTodo)
router.delete('/:id',todoController.deleteTodo)


module.exports = router;