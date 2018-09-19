$(document).ready(function() {

    //get all todos
    $.getJSON('/api/todos')
    .then(getTodos);

    function getTodos(todos) {
        //add todos
        todos.forEach(function(todo) {
            addTodo(todo)
        });
    }

    $('.list').on('click', 'li', function() {
        updateTodo($(this));
    });

    function addTodo(todo) {
        var newTodo = $("<li class='task'>" + todo.name + "<span>x</span></li>");
            newTodo.data('id', todo._id);
            newTodo.data('completed', todo.completed);
            if (todo.completed) {
                newTodo.addClass('done')
            }
            $(".list").append(newTodo);
    }
        //post todos
        $("#todoInput").keypress(function(event) {
            if (event.which == 13) {
                createTodo($(this).val());
            }
        });

        function createTodo(param) {
            $.post('/api/todos', {name: param}, function(todo) {
                $("#todoInput").val('');
                $('.list').append('<li class="task">' +todo.name + '<span>x</span></li>');
            });
        }

        $(".list").on('click', 'span', function(e) {
            e.stopPropagation();
            removeTodo($(this).parent());
        });

    function removeTodo(todo) {
        var id = todo.data('id');
          // if (confirm("Are you sure?")) {
            $.ajax({
                method: 'DELETE',
                url: '/api/todos/'+ id
            })
            .then(function() {
                todo.remove()
            })
         //  }
    }

    function updateTodo(todo) {
        var id = todo.data('id');
        var isDone = !todo.data('completed');
        var updatedData = {completed: isDone};
        $.ajax({
            method: 'PUT',
            url: '/api/todos/'+id,
            data: updatedData
        })
        .then(function(data)    {
            todo.toggleClass("done");
            todo.data("completed", isDone);
        });
    }

});