<template>
  <div class="todo-list">
    <div class="todo-list_caption">
      <h2>My To-Do List</h2>
    </div>
    <task-input></task-input>
    <task-list></task-list>
  </div>
</template>

<script>
  import List from './list.vue';
  import Input from './input.vue'

  export default {
    components: {
      'task-input': Input,
      'task-list': List,
    },
  }
</script>

<style>
  .todo-list{
    font-family: Arial;

    --active-green: rgba(157, 222, 91, 0.25);
    --hover-green: rgba(157, 222, 91, 0.5);
    --light-green: rgb(157, 222, 91);
    --dark-green: rgb(36, 54, 21);
    --dark-grey: rgb(227, 228, 232);

    --todo-indent: 5px;
    --todo-size: 500px;
    --check-size: calc(1em + 2 * var(--todo-indent));
    --int: calc((var(--todo-size) - 6 * var(--todo-indent)) - var(--check-size));
    --text-size: calc(var(--int) * 2 / 3);
    --date-size: calc(var(--int) * 1 / 3);

    color: var(--dark-green);

    width: var(--todo-size);
  }
</style>
