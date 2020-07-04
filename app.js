new Vue({
    el: '#tasks',

    data: {
        tasks: [
            { body: 'Go to the store', completed: false }
        ],
        newTask: ''
    },

    computed: {
        completions: function() {
            return this.tasks.filter(function(task) {
                return task.completed;
            });
        },

        remaining: function() {
            return this.tasks.filter(function(task) {
                return ! task.completed;
            });
        }
    },

    filters: {
        inProcess: function(tasks) {
            return tasks.filter(function(task) {
                return ! task.completed;
            });
        }
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

        completeTask: function(task) {
            task.completed = true;

        },

        removeTask: function(task) {
            this.tasks.$remove(task);
        }
    }
})