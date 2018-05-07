<template>
  <button
    v-on:click="click()"
  >
    {{this.text}}
  </button>
</template>

<script>
  export default {
    props: ['text'],
    methods: {
      click: function () {
        this.$emit('pin', {text: this.text});
      }
    }
  }
</script>