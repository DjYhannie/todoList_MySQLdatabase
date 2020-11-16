const router = require('express').Router();

//import controller
const todoController = require('../controllers/todoController');

router.get('/get', todoController.getAllTodo);

router.post('/add', todoController.addTodo);

router.post('/delete', todoController.deleteTodo);

router.get('/update/:id', todoController.getUpdateview);

router.post('/update/:id', todoController.updateTodo);
module.exports = router;
