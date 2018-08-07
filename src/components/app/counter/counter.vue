<template>
  <div class="counter">
    <p class="counter_count">{{count}}</p>

    <button v-on:click="increment" class="button inc">+</button>
    <button v-on:click="decrement" class="button dec">-</button>

  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState({count: state => state.counter.count,}),
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
    grid-template-rows: 100px 100px;
    grid-template-areas: "count count" "inc dec";
    justify-items: center;
    align-items: center;
  }

  .inc {
    grid-area: inc;
  }

  .dec {
    grid-area: dec;
  }

  .inc,
  .dec {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inc,
  .dec,
  .counter_count {
    color: var(--dark-green);
    font-size: 30px;
  }

  .counter_count {
    grid-area: count;
  }
</style>
