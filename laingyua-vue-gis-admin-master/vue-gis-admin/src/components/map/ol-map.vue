<template>
  <div>
    <div id="map" class="map"></div>
  </div>
</template>
<script>
// 映入css文件、
import "ol/ol.css";
import zMap from "../../Utils/ol/zMap";
export default {
  props: ["zoom", "center", "isShowBaseMap", "isScaleLine"],
  data() {
    return {
      map: null
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      let zmap = new zMap();
      this.map = zmap.initMap({
        center: this.center,
        zoom: this.zoom,
        extent: [113.4, 34.6, 113.7, 34.7]
      });
      if (this.isShowBaseMap) zmap.tiandituVetorMap(this.map);
      if (this.isScaleLine) zmap.showScaleLine(this.map);
    }
  }
};
</script>
<style>
.map {
  width: 100%;
  height: 100%;
}
</style>


