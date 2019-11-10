<template>
  <div id="viewport-cutter">
    <div id="history-background" :style="{left: position + 'px'}" ref="content">
      <div v-for="(item, index) in projects"
        class="history-items" v-bind:style="{background: item.color}">
        <div class="history-project-images" :id="[item.image]"></div>
        <p class="history-title">{{item.title}}</p>
        <p class="history-context">{{item.context}}</p>
      </div>
    </div>
  </div>
</template>
<style>
#viewport-cutter {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}
#history-background {
  background: #c8e6c9;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  animation-name: showall;
  animation-duration: 5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
@keyframes showall {
  0% { left: 0; }
  100% { left: -100vh; }
}
.history-items {
  position: relative;
  height: 61.8vh;
  width: 94.1vh;
  margin: 0 2.8vh 0 2.8vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  color: #fff;
  border-top-left-radius: 4.5vh;
  border-top-right-radius: 4.5vh;
  flex-shrink: 0;
}
.history-project-images {
  width: 38.2vh;
  height: 38.2vh;
  position: absolute;
  left: 50%;
  top: 0;
  flex-shrink: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.history-title {
  position: absolute;
  top: 27.25vh;
  font-size: 10vh;
  margin: 0;
  padding: 0;
  transform: translateY(-50%);
}
.history-context {
  position: absolute;
  top: 35.4vh;
  width: 61.8vh;
  margin: 0;
  padding: 0;
  font-size: 3.82vh;
}
#history-project-image-one {
  background: url(../assets/hackfire.jpg);
  background-size: cover;
  background-position: 50%;
}
#history-project-image-two {
  background: url(../assets/idoc.jpg);
  background-size: cover;
  background-position: 50%;
}
#history-project-image-three {
  background: url(../assets/wiki.jpg);
  background-size: cover;
  background-position: 50%;
}
</style>
<script>
export default {
  data: function() {
    return {
      projects: new Array(),
      position: 0 };
  }, methods: {
  }, mounted: function() {
    this.projects.push({ title: "黑客马拉松",
                         context: `HackFire 由多火携手计软院举办，
                                   6 支队伍在同一屋檐下肝了 20 个小时，
                                   完成了各自的作品。`,
                         color: "#90caf9",
                         image: "history-project-image-one" });
    this.projects.push({ title: "IDOC",
                         context: `idoc ，期末的救星，让你成为考试的豪杰。集中了相当量的各学科历年期末试卷与复习资料。`,
                         color: "#ffcc80",
                         image: "history-project-image-two" });
    this.projects.push({ title: "信大百科",
                         context: `技术上已经没有问题，但正如所有wiki一样，需要有更多的人来编辑才有意义......`,
                         color: "#a5d6a7",
                         image: "history-project-image-three" });
  }
}
</script>
