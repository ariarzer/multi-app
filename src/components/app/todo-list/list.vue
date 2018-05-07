<template>
  <div>
    <div
      v-for="(item, index) in list"
      v-bind:key="index"
      class="task"
    >
      <div class="task_date">
        {{item.date}}
      </div>
      <is-done v-bind:index="index"></is-done>
      <div class="task_text">
        {{item.text}}
      </div>
    </div>
  </div>
</template>

<script>
  import isDone from './is-done.vue';

  export default {
    components: {
      'is-done': isDone,
    },
    computed: {
      list: function () {
        return this.$store.state.todoList.list;
      }
    },
  }
</script>

<style>
  .task {
    display: flex;

    align-items: stretch;
    justify-content: stretch;

    margin: var(--todo-indent);
  }

  .task_text,
  .task_date {
    border-bottom: 2px solid var(--light-green);

    padding: var(--todo-indent);
    margin-top: var(--todo-indent);
  }

  .task_text {
    width: var(--text-size);
  }

  .task_date {
    width: var(--date-size);
  }
</style>
