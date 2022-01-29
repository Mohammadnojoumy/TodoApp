(function() {
    window.addEventListener('load', function() {
        var header_title = this.document.getElementsByClassName('header-title')[0];
        header_title.innerHTML = 'My daily tasks';
        header_title.classList.add('slow-display');
    });
    var input = document.getElementById('input');
    var btn = document.getElementById('btn-submit');

    function ValidateInput(e) {
        if (e.value.length) {
            return true;
        }
        return false;

    };

    btn.addEventListener('click', function(e) {
        if (ValidateInput(input)) {
            var ul = document.createElement('ul');
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(input.value));
            var btnDelete = document.createElement('button');
            btnDelete.innerHTML = 'X';
            btnDelete.classList.add('btn', 'btn-danger', 'right-direction');
            li.appendChild(btnDelete);
            btnDelete.addEventListener('click', function() {
                li.classList.add('delete');
            })
            li.addEventListener('click', function() {
                li.classList.toggle('task-done');
            });
            ul.appendChild(li);
            var todoList = document.getElementById('todoList');
            todoList.appendChild(ul);
            input.value = '';
        }
    });

    input.addEventListener('keypress', function(e) {
        if (ValidateInput(input)) {
            if (e.key == 'Enter') {
                var ul = document.createElement('ul');
                var li = document.createElement('li');
                li.appendChild(document.createTextNode(input.value));
                var btnDelete = document.createElement('button');
                btnDelete.innerHTML = 'X';
                btnDelete.classList.add('btn', 'btn-danger', 'right-direction');
                li.addEventListener('click', function() {
                    li.classList.toggle('task-done');
                })
                li.appendChild(btnDelete);

                btnDelete.addEventListener('click', function() {

                    li.classList.add('delete');

                })
                ul.appendChild(li);
                var todoList = document.getElementById('todoList');
                todoList.appendChild(ul);
                input.value = '';
            }
        }
    });
})();