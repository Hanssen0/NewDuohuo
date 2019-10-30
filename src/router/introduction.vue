<template>
  <div id="introduction-background">
    <img src="../assets/TransLOGO.svg" id="introduction-LOGO"></img>
    <div>
      <p id="introduction-who-are-we">我们是一个由热爱 IT 的开发者们组成的校园团队。</p>
      <p class="introduction-us">我们由普通的大学生组成，试图成为不普通的开发者团队。</p>
      <p class="introduction-us">欢迎加入我们，说不定你就是那个被选中的家伙呢。</p>
    </div>
  </div>
</template>
<style>
#introduction-background {
  background: #ffcdd2;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#introduction-LOGO {
  width: 38.2vh;
  height: 38.2vh;
  padding: 11.8vh;
}
.introduction-us {
  font-size: 5.06vh;
  color: rgba(255, 255, 255, 1);
  margin: 0;
}
#introduction-who-are-we {
  font-size: 7.74vh;
  color: rgba(255, 255, 255, 1);
  margin: 0;
  margin-bottom: 2.39vh;
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
