import axios from 'axios';



const state = {
  
  todos:[]
};

const getters = {
  allTodos: (state) => state.todos
};

const actions = {
  async fetchTodos ({commit}) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20');
    //by default only 20 items (speed up the page!)
    commit('setTodos', response.data);
    // console.log(response.data);
  }, 
  async addTodo ({commit}, title) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos/', {
      title,
      completed: false
    }); //send the data object (ES6 short version!)
    // console.log(response.data);
    commit('newTodo', response.data);
  },
  async deleteTodo({commit}, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`); //pass the id in the literal
    commit('removeTodo', id); 
  },
  async filterTodos({commit}, e) {
    
    //get selected number 
    const limit=parseInt(e.target.options[e.target.options.selectedIndex].value); //this is Vanilla JS, not Vue!
    // console.log(e);

    //request
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
    commit('setTodos', response.data); // we use again setTodos ;)
  },
  async updateTodo({commit}, updatedTodo) {
    // console.log(updatedTodo);
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo);

    commit('updTodo', response.data); //we can use the same name for actions and mutations, but here we used two different names for sake of clarity

    console.log(response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo), //unshift adds the new element to the beginning of the array; use push to add the new item at the end.
  //
  removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
  updTodo: (state, updTodo) => {
    //extract the index
    const index = state.todos.findIndex(todo => todo.id == updTodo.id);
    if (index !== -1) {
      //Remove the old item and replace with the new one
      state.todos.splice(index,1,updTodo);
      //The splice() method adds/removes items to/from an array, and returns the removed item(s).
      


    }
  }  
};


export default {
  state,
  getters,
  actions,
  mutations
}