<template>
  <div class="calculator">
    <h2>Calculator</h2>
    <div class="calc">
      <input
        class="calculator_io"
        v-model="value"
        v-on:keyup.enter="calculate"
      >

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

  const operators = ['+', '-', '*', '/'];

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
        if (payload.text === '=') {
          this.calculate();
        }
        else
        {
          if ('=' === this.pre) {
            if (operators.includes(payload.text)) {
              this.value += payload.text;
              this.pre = payload.text;
            }
            else {
              this.value = payload.text;
              this.pre = payload.text;
            }
          }
          else {
            this.value += payload.text;
            this.pre = payload.text;
          }
        }
      },
      calculate: function () {
        this.value = calc(this.value);
        this.pre = '=';
        console.log('submit');
      }
    }
  }
</script>

<style>
  .calculator {
    --gap: calc(var(--indent) / 2);
  }

  .calculator_io {
    width: calc(4 * var(--button-size) + 7 * var(--gap));
    height: var(--button-size);
    box-sizing: border-box;

    padding: var(--indent);
    margin-bottom: var(--gap);

    margin-left: calc(var(--gap) / 2);
    margin-right: calc(var(--gap) / 2);

    background-color: var(--active-green);

    border: none;
  }

  .calculator_io:focus {
    background-color: var(--hover-green);
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
