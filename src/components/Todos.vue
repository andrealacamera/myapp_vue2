<template>
<div>
  <h1>Todos</h1>
  <div class="legend">
    <span> Double click to mark as <em>completed</em></span>
    <span> 
      <span class="incompleted-box"></span> <i class="fas fa-arrow-right"></i> Incomplete </span>
    <span> 
      <span class="completed-box"></span> <i class="fas fa-arrow-right"></i>
       Completed   
    </span>  
  </div>
  <div class="todos">
    <div 
      @dblclick="onDblClick(todo)"
      class="todo" 
      v-for="todo in allTodos" 
      :key="todo.id"
      v-bind:class="{'is-completed':todo.completed}">
      {{todo.title}}
      <i id="trash" @click="deleteTodo(todo.id)" class="fas fa-trash"></i>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Todos", 
  computed: mapGetters(['allTodos']), //if there is only one 
  methods: {                        // if there are several use spread operator
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    onDblClick(todo) {
    // console.log(todo);
    const updTodo = {
      id: todo.id, //the same!
      title: todo.title, //the same!
      completed: !todo.completed //toggle it!
    }
    this.updateTodo(updTodo); //call the action
  }
  },
  created() {
    console.log("this component has been created! Hi!")
    this.fetchTodos();
  },
  destroyed() {
    console.log("this component has been destroyed! Bye!")
  }
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

#trash {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: rgb(255, 204, 204);
}

.legend {
  display: flex;
  justify-content: space-around;
  margin: 1rem 1rem;
}

.completed-box {
  display: inline-block;
  width: 15px;
  height: 15px;
  background: #35495e;
}

.incompleted-box {
  display: inline-block;
  width: 15px;
  height: 15px;
  background: #41b883;
}

@media(max-width: 500px) {
.todos {
  grid-template-columns: 1fr;
}
}

.is-completed {
  text-decoration: line-through;
  background: #35495e;
  color: #eee;
}
</style>