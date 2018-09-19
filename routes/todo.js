var express = require('express');
var router = express.Router();
var db = require('../models');
var helpers = require('../helpers/todo');

// router.get('/todos',);
// router.post('/todos', );
router.route('/todos')
    .get(helpers.getTodos)
    .post(helpers.createTodo);
router.route('/todos/:todoId')
    .get(helpers.getOneTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);

// router.get('/todos/:todoId', helpers.getOneTodo);
// router.put('/todos/:todoId', helpers.updateTodo);
// router.delete('/todos/:todoId', helpers.deleteTodo);

module.exports = router;