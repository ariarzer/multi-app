<template>
  <div>
    <div class="todo_input">
      <input
        type="text"
        v-model="newTaskText"
        class="input_text"
      >
      <input
        type="date"
        v-model="newTaskDate"
        class="input_date"
      >
      <button
        v-on:click="addItem(newTaskText, newTaskDate)"
        class="button todo_button"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
  function dateFormat(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;

    return year + '-' + month + '-' + day;
  }

  export default {
    data: function () {
      return {
        newTaskText: '',
        newTaskDate: dateFormat(new Date()),
      }
    },
    methods: {
      addItem(text, date) {
        alert(this.newTaskDate);

        if (text === '') {
          alert('Task text is empty')
        } else {
          this.$store.commit('addItem', {
            text: text,
            date: date,
          });
          this.newTaskText = '';
          this.newTaskDate = new Date();
        }
      }
    }
  }
</script>

<style>
  .todo_input {
    display: flex;
  }

  .input_date,
  .input_text,
  .todo_button {
    font-family: Arial;
    color: var(--dark-green);

    margin: var(--todo-indent);
    padding: var(--todo-indent);

    height: var(--check-size);

    box-sizing: border-box;
  }

  .input_date,
  .input_text {
    background-color: var(--active-green);

    border: none;
  }

  .input_date:focus,
  .input_text:focus {
    background-color: var(--hover-green);
  }

  .input_text {
    width: var(--text-size);
  }

  .input_date {
    width: var(--date-size);
  }

  .todo_button {
    width: var(--check-size);

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>