<template>
  <div class="counter">
    <p class="counter_count">{{count}}</p>

    <button v-on:click="increment" class="button inc">+</button>
    <button v-on:click="decrement" class="button dec">-</button>

  </div>
</template>

<script>
  export default {
    computed: {
      count() {
        return this.$store.state.counter.count;
      }
    },
    methods: {
      increment() {
        this.$store.commit("increment");
      },
      decrement() {
        this.$store.commit("decrement");
      }
    }
  };
</script>

<style>
  .counter {
    display: grid;
    grid-template-columns: 100px 100px;
    grid-template-row: 100px 100px;
    grid-template-areas: "count count" "inc dec";
    justify-items: center;
  }

  .inc {
    grid-area: inc;
  }

  .dec {
    grid-area: dec;
  }

  .inc,
  .dec {
    height: 2em;
    width: 2em;

    display: flex;
    justify-content: center;
  }

  .inc,
  .dec,
  .counter_count {
    color: #243615;
    font-size: 30px;
  }

  .counter_count {
    grid-area: count;
  }
</style>