<template>
  <div>
    <cesium-map></cesium-map>
  </div>
</template>

<script>
import CesiumMap from "../../../components/map/cesium-map";
export default {
  data() {
    return {};
  },
  components: {
    CesiumMap
  },
  mounted() {
    console.log(cMap);
    var Cesium = this.Cesium;
    var point = {
      position: Cesium.Cartesian3.fromDegrees(113.2, 34.5),
      name: "Red ellipse on surface",
      point: {
        pixelSize: 10,
        color: Cesium.Color.BLUE.withAlpha(0.5),
        outlineColor: Cesium.Color.RED,
        outlineWidth: 2
      }
    };
    cMap.entities.add(point);
  }
};
</script>

<style>
</style>