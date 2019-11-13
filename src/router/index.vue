<template>
  <div id="background">
    <div id="word" v-bind:style="{height: test}">
      <p id="object">We're</p>
      <p ref="group-name" id="subject">Duo Huo</p>
    </div>
  </div>
</template>
<style scoped>
#background {
  background: #bbdefb;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#word {
  display:flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
}
#subject,
#object {
  margin: 0;
  line-height: 90%;
  font-size: 80px;
  color: rgba(255, 255, 255, 0.5);
}
#subject {
  font-size: 250px;
  color: rgba(255, 255, 255, 1);
}
</style>
<script>
export default {
  data: function() {
    return { test: "0px" };
  }, methods: {
  }, mounted: function() {
    var AutoResize = () => {
      this.test = this.$refs["group-name"].offsetHeight + "px";
    }
    AutoResize();
    window.onresize = AutoResize;
  }
}
</script>
