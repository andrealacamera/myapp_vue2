<template>
  <div>
    <h3>Add Todo</h3>
    <div >
      <form @submit.prevent="onSubmit" class="input-group mb-3">
        <!-- <span><i class="fas fa-plus"></i></span> -->
        <input class="form-control" type="text" v-model="title" placeholder="Add Todo...">
        <button class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']), //spread operator here!
    onSubmit(e){ //the event
      this.addTodo(this.title);// because is the data of this component
    }
  }
};
</script>

<style>

</style>