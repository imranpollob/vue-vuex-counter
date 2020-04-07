<template>
  <div id="app">
    <h1>Counter: {{ $store.state.counter }}</h1>

    <button @click="increment(2)">Increment Two</button>
    <button @click="increment(5)">Increment Five</button>
    <button @click="decrement(10)">Decrement Ten</button>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    increment(value) {
      this.$store.commit("incrementCounter", value);
    },
    decrement(value) {
      this.$store.commit("decrementCounter", value);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
