<template>
  <div id="viewport-cutter">
    <div id="background" :style="{left: position + 'px'}" ref="content"
      @transitionend="InvertBackgroundDirection">
      <div v-for="(item, index) in projects"
        class="items" v-bind:style="{background: item.color}">
        <div class="project-images" :id="[item.image]"></div>
        <p class="title">{{item.title}}</p>
        <p class="context">{{item.context}}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
#viewport-cutter {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}
#background {
  background: #c8e6c9;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  transition: left 5s ease-in-out;
}
.items {
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
.project-images {
  width: 38.2vh;
  height: 38.2vh;
  position: absolute;
  left: 50%;
  top: 0;
  flex-shrink: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.title {
  position: absolute;
  top: 27.25vh;
  font-size: 10vh;
  margin: 0;
  padding: 0;
  transform: translateY(-50%);
}
.context {
  position: absolute;
  top: 35.4vh;
  width: 61.8vh;
  margin: 0;
  padding: 0;
  font-size: 3.82vh;
}
#project-image-one {
  background: url(../assets/hackfire.jpg);
  background-size: cover;
  background-position: 50%;
}
#project-image-two {
  background: url(../assets/idoc.jpg);
  background-size: cover;
  background-position: 50%;
}
#project-image-three {
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
    InvertBackgroundDirection: function() {
      if (this.position == 0) {
        this.position = -this.$refs["content"].offsetWidth +
                        document.body.clientWidth;
      }else {
        this.position = 0;
      }
    }
  }, mounted: function() {
    this.projects.push({ title: "黑客马拉松",
                         context: `HackFire 由多火携手计软院举办，
                                   6 支队伍在同一屋檐下肝了 20 个小时，
                                   完成了各自的作品。`,
                         color: "#90caf9",
                         image: "project-image-one" });
    this.projects.push({ title: "IDOC",
                         context: `idoc ，期末的救星，让你成为考试的豪杰。集中了相当量的各学科历年期末试卷与复习资料。`,
                         color: "#ffcc80",
                         image: "project-image-two" });
    this.projects.push({ title: "信大百科",
                         context: `技术上已经没有问题，但正如所有wiki一样，需要有更多的人来编辑才有意义......`,
                         color: "#a5d6a7",
                         image: "project-image-three" });
    this.$nextTick(() => { this.position = -this.$refs["content"].offsetWidth + document.body.clientWidth; });
  }
}
</script>
