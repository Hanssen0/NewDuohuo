<template>
  <div id="history-background">
    <div id="history-project-image"></div>
    <div id="history-project-content">
      <p id="what-we-did">黑客马拉松</p>
    </div>
  </div>
</template>
<style>
#history-background {
  background: #c8e6c9;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
#history-project-image {
  width: 38.2vw;
  height: 100vh;
  background: url(../assets/hackfire.jpg);
  background-size: cover;
  background-position: 50%;
  flex-shrink: 0;
}
#history-project-content {
  width: 61.8vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#what-we-did {
  font-size: 150px;
  color: rgba(255, 255, 255, 1);
}
</style>
<script>
export default {
  data: function() {
    return {};
  }, methods: {
  }, mounted: function() {
  }
}
</script>
