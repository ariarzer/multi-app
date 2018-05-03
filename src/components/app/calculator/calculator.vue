<template>
  <div class="calculator">
    <h2>Calculator</h2>
    <div class="calc">
      <div
        class="calculator_output"
      >
        {{value}}
      </div>

      <div class="calculator_pins-field">
        <pin
          v-for="(item, index) in pinsText"
          v-bind:key="index"
          v-bind:text="item"
          class="button"
          v-on:pin="pin"
        >
        </pin>
      </div>

    </div>
  </div>
</template>

<script>
  import Pin from './pin.vue'
  import calc from 'calculator';

  export default {
    components: {Pin},
    data: function () {
      return {
        value: '',
        pinsText: [
          '1', '2', '3', '/',
          '4', '5', '6', '*',
          '7', '8', '9', '-',
          '.', '0', '=', '+'
        ],
        pre: '=',
      }
    },
    methods: {
      pin: function (payload) {
        console.log('pre  ' + this.pre);

        if (payload.text === '=') {
          this.value = calc(this.value);
          this.pre = '=';
          console.log('pre equ ' + this.pre);
        }
        else {
          if (this.pre == '=') {
            this.value = payload.text;
            this.pre = payload.text;
          }
          else {
            this.value += payload.text;
            this.pre = payload.text;
          }
        }
      }
    }
  }
</script>

<style>
  .calculator {
    --gap: calc(var(--indent) / 2);
  }

  .calculator_output {
    display: flex;

    width: calc(4 * var(--button-size) + 3 * var(--gap));
    height: var(--button-size);
    box-sizing: border-box;

    padding: var(--indent);
    margin-bottom: var(--gap);

    background-color: var(--hover-green);
  }

  .calculator_output:focus {
    background-color: var(--active-green);
  }

  .calculator_pins-field {
    display: grid;
    grid-template-columns: repeat(4, var(--button-size));
    grid-template-rows: repeat(4, var(--button-size));

    grid-column-gap: var(--gap);
    grid-row-gap: var(--gap);

    justify-items: center;
    align-items: center;
  }
</style>
