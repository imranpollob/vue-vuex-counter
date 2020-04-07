<template>
  <div id="app">
    <Display />
    <Buttons />
  </div>
</template>

<script>
import Display from "./components/Display";
import Buttons from "./components/Buttons";

export default {
  name: "app",
  components: {
    Display,
    Buttons
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
