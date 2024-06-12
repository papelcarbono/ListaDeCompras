$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault(); // Impede o envio do formulário
        var taskText = $('#task-input').val().trim(); // Pega o valor do input e remove espaços extras
        if (taskText !== '') {
            var newTask = $('<li></li>').text(taskText);
            $('#task-list').append(newTask);
            $('#task-input').val(''); // Limpa o campo de input
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
