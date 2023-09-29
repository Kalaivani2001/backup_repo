// Define a Task model
const Task = Backbone.Model.extend({
    defaults: {
        title: ''
    }
});

// Define a collection of tasks
const TaskList = Backbone.Collection.extend({
    model: Task
});

// Create a view for individual tasks
const TaskView = Backbone.View.extend({
    tagName: 'li',
    template: _.template('<%= title %>'),

    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

// Create a view for the overall task list
const TaskListView = Backbone.View.extend({
    el: '#task-list',

    events: {
        'click #add-task': 'addTask'
    },

    initialize: function () {
        this.collection = new TaskList();
        this.render();
    },

    render: function () {
        const $taskList = this.$('#tasks');
        this.collection.each(function (task) {
            const taskView = new TaskView({ model: task });
            $taskList.append(taskView.render().el);
        });
    },

    addTask: function () {
        const $newTaskInput = this.$('#new-task');
        const taskTitle = $newTaskInput.val();
        if (taskTitle) {
            this.collection.add({ title: taskTitle });
            $newTaskInput.val('');
        }
    }
});

// Initialize the TaskListView
const taskListView = new TaskListView();
