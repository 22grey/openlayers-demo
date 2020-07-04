<template>
  <div id="container"></div>
</template>

<script>
var text = "22222";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(text);
    var viewer = new this.Cesium.Viewer("container", {
      //加载在线谷歌地图
      imageryProvider: new this.Cesium.UrlTemplateImageryProvider({
        url: "http://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}"
      })
    });
    window.cMap = viewer;
  }
};
</script>

<style scoped>
#container {
  height: 100%;
  width: 100%;
}
</style>