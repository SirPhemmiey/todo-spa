var express = require('express');
var router = express.Router();
var helpers = require('../helpers/todo');

router.route('/todos')
    .get(helpers.getTodos)
    .post(helpers.createTodo);
router.route('/todos/:todoId')
    .get(helpers.getOneTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);
module.exports = router;