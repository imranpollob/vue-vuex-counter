<template>
  <div>
    <button @click="increment(2)">Increment Two</button>
    <button @click="increment(5)">Increment Five</button>
    <button @click="decrement(10)">Decrement Ten</button>
  </div>
</template>

<script>
export default {
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