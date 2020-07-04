<template>
  <div class="map-box">
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
import olMap from "../../../components/map/ol-map";
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
    var map = this.$refs.map.map;

    //  tiandituVetorMap(map)
    //  setMapCenter(map,[112.3,32.21])
    //  addPoint(map,[112.3,32.21],"/images/banner.jpg")
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
</style>