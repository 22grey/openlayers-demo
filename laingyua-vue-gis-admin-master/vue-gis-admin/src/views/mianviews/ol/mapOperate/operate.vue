<template>
  <div class="map-box">
    <div class="map-btns">
      <el-button type="primary" @click="zoomOut">单击放大</el-button>
      <el-button type="success" @click="zoomIn">单击缩小</el-button>
      <el-button type="info" @click="resetCenter">改变地图中心点</el-button>
      <el-button type="warning" @click="back">复位</el-button>
      <!-- <el-button type="danger" @click="">设置显示级别</el-button> -->
    </div>
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
      center: [113.4, 34.56]
    };
  },
  components: {
    olMap
  },
  mounted() {
    this.map = this.$refs.map.map;
  },
  methods: {
    zoomOut() {
      let view = this.map.getView();
      let zoom = view.getZoom();
      view.setZoom(zoom + 1);
    },
    zoomIn() {
      let view = this.map.getView();
      let zoom = view.getZoom();
      view.setZoom(zoom - 1);
    },
    resetCenter() {
      let view = this.map.getView();
      view.setCenter([116.3, 35.9]);
    },
    back() {
      let view = this.map.getView();
      view.setCenter(this.center);
    }
  }
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
.map-btns {
  position: absolute;
  top: 70px;
  left: 245px;
  z-index: 100;
}
</style>