const app = new Vue({
  el: "#root",
  data: {
    todos: [
      {
        text: "Study code",
        done: false
      },
      {
        text: "Drink water to not evaporate",
        done: true
      },
      {
        text: "Complete assigned tasks",
        done: true
      },
      {
        text: "Take five minutes to yourself",
        done: false
      },

      {
        text: "Do the laundry",
        done: false
      }
    ],

    newTodo: ""
  },

  // ? Delete task
  methods: {
    deleteFromList(item) {
      this.todos.splice(item, 1);
    },

    // * Add task
    addToList: function (newTask) {
      if (newTask == "") {
        alert("Please, specify a new task!");
      } else {
        this.todos.push({ text: newTask, done: false });
        this.newTodo = "";
      }
    }
  }
});
