<template>
  <div id="app">
    <div id="index">
      <div id="index-word"v-bind:style="{height: test}">
        <p id="index-object">We're</p>
        <p ref="group-name" id="index-subject">Duo Huo</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data: function() {
    return {test: 0};
  }, methods: {
  }, mounted: function() {
    this.test = this.$refs["group-name"].offsetHeight + "px";
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}
#index {
  background: #ffcdd2;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#index-word {
  display:flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
}
#index-subject,
#index-object,
#index-preposition {
  margin: 0;
  line-height: 90%;
}
#index-object {
  font-size: 80px;
  --color-grey: 80%;
  color: rgba(var(--color-grey), var(--color-grey), var(--color-grey), 0.8);
}
#index-subject {
  font-size: 250px;
  --color-grey: 100%;
  color: rgba(var(--color-grey), var(--color-grey), var(--color-grey), 1);
}
</style>
