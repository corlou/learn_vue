new Vue({
    el: '#tasks',

    data: {
        tasks: [
            { body: 'Go to the store', completed: false }
        ],
        newTask: ''
    },

    methods: {
        addTask: function(e) {
            e.preventDefault();

            this.tasks.push({
                body: this.newTask,
                completed: false

            });
            this.newTask = '';
        },

        editTask: function(task) {
            // remove the task
            this.removeTask(task);

            // update the newTask input 
            this.newTask = task.body;

            //focus the newTask input
            this.$$.newTask.focus();

        },

        removeTask: function(task) {
            
            this.tasks.$remove(task);
        }

    }
}) 