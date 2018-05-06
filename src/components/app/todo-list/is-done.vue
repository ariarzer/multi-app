<template>
  <div>
    <input
      v-model="isDone"
      type="checkbox"
      v-bind:id="this.index"
      v-on:change="change"
      class="task_is-done"
    >
    <label
      v-bind:for="this.index"
      class="task_label-for-is-done"
    >
    </label>
  </div>
</template>

<script>
  export default {
    props: ['index'],
    data: function () {
      return {
        isDone: this.$store.state.todoList.list[this.index].isDone,
      }
    },
    methods: {
      change: function () {
        this.$store.commit('isDone', this.index)
      }
    }
  }
</script>

<style>
  .task_is-done {
    display: none;
  }

  .task_label-for-is-done {
    display: block;
    background: var(--active-green);

    height: var(--check-size);
    width: var(--check-size);
    box-sizing: border-box;

    border-radius: 3px;

    padding: var(--todo-indent);
    margin: var(--todo-indent);

    text-align: center;
    color: var(--dark-green);
  }

  .task_is-done:not(:checked) + .task_label-for-is-done:before{
    content: "";
  }

  .task_is-done:checked + .task_label-for-is-done:before{
    content: "✓";
  }
</style>
