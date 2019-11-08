<template>
  <div>
    <div id="introduction-background"> </div>
    <div id="introduction-field">
      <img src="../assets/TransLOGO.svg" id="introduction-LOGO"></img>
      <p class="introduction-us">我们由普通的大学生组成，试图成为不普通的团队</p>
      <p class="introduction-us">欢迎加入我们，说不定你就是那个被选中的家伙</p>
    </div>
  </div>
</template>
<style>
#introduction-background {
  height: 38.2vh;
  width: 100vw;
  background: #ffcdd2;
}
#introduction-field {
  padding-top: 38.55vh;
  width: 100vw;
  height: 61.8vh;
  background: #ef9a9a;
  position: relative;
}
#introduction-LOGO {
  width: 38.2vh;
  height: 38.2vh;
  position: absolute;
  top: 0;
  left: 50vw;
  box-shadow: 0 0 0 3.353vh rgba(229, 115, 115, 0.237),
              0 0 0 5.425vh rgba(229, 115, 115, 0.145),
              0 0 0 6.707vh rgba(229, 115, 115, 0.236);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.introduction-us {
  font-size: 2.81vw;
  color: rgba(255, 255, 255, 1);
  transform: translateY(-50%);
  margin: 0;
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
