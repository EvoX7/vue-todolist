const app = new Vue({
  el: "#root",
  data: {
    todos: [
      {
        text: 'Study code',
        done: false
      },
      {
        text: 'Drink water to not evaporate',
        done: true
      },
      {
        text: 'Complete assigned tasks',
        done: true
      },
      {
        text: 'Take five minutes to yourself ',
        done: false
      },

    ],

  },

  methods: {
    deleteFromList(item) {
      this.todos.splice(item, 1);
  
      
    }

}

});
