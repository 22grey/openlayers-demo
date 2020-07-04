<template>
  <div class="map-box">
    <div class="info">地图事件:{{info}}</div>
    <ol-map
      class="map"
      ref="map"
      zoom="6"
      :center="center"
      :isShowBaseMap="true"
      :isScaleLine="true"
    ></ol-map>
  </div>
</template>

<script>
import olMap from "../../../../components/map/ol-map";
export default {
  data() {
    return {
      center: [113.4, 34.56],
      info: ""
    };
  },
  components: {
    olMap
  },
  mounted() {
    this.map = this.$refs.map.map;
    var that = this;
    // 响应单击事件
    that.map.on("singleclick", function(event) {
      that.info = "触发了ol.Map的单击事件：singleclick";
    });

    // 响应双击事件
    that.map.on("dblclick", function(event) {
      that.info = "触发了ol.Map的双击事件：dblclick";
    });

    // 响应点击事件
    that.map.on("click", function(event) {
      that.info = "触发了ol.Map的点击事件：click";
    });

    // 响应鼠标移动事件，事件太频繁，故注释掉了，可自行验证该事件
    // map.on('pointermove', function(event){
    //     document.getElementById('info').innerHTML = '触发了ol.Map的鼠标移动事件：pointermove';
    // });

    // 响应拖拽事件
    that.map.on("pointerdrag", function(event) {
      that.info = "触发了ol.Map的拖拽事件：pointerdrag";
    });

    // 地图移动事件
    that.map.on("moveend", function(event) {
      that.info = "触发了ol.Map的地图移动事件：moveend";
    });
  },
  methods: {}
};
</script>

<style>
.map-box {
  height: 100%;
  width: 100%;
}
.map {
  height: 100%;
  width: 100%;
}
.info {
  position: absolute;
  top: 70px;
  left: 245px;
  z-index: 100;
}
</style>