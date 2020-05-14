const vm = new Vue({            //main VUe instance

        el: '#todoapp',
        data: {

            title: 'To-Do',
            newtodo: '',
            todoList: []
        },
        methods: {
            addTodo(){ // pushin gnew todos
                console.log(this.newtodo);
                this.todoList.push({
                title : this.newtodo,
                done: false
                });
                this.newtodo = ""
            },
            removeTodo(todo){
                const index = this.todoList.indexOf(todo);
                this.todoList.splice(index,1);
            }
        }



})