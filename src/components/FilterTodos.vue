<template>
  <div>
    Filter Todos:
    <span class="mb-3">
      <select @change="filterTodos($event)" class="form-select" aria-label="Default select example">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20" selected="selected">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
      </select>
    </span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FilterTodos',
  methods: {
    ...mapActions(['filterTodos'])
  }
}
</script>

<style>

</style>