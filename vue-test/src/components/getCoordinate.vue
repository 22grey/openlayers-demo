<template>
  <div id="map" ref="rootmap"></div>
</template>

<script>
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { transform } from "ol/proj";

export default {
  name: "getCoordinate",
  data() {
    return {
      map: null
    };
  },

  mounted() {
    var mapcontainer = this.$refs.rootmap;

    this.map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        projection: "EPSG:4326", //使用这个坐标系
        center: [114.064839, 22.548857], //深圳
        // center: transform([104, 30], "EPSG:4326", "EPSG:3857"),
        zoom: 12
      })
    });

    var elmap = document.getElementById('map')
  
  //获取鼠标位置
    elmap.onclick = (e) => {
      var t = transform(this.map.getEventCoordinate(e),'EPSG:3857', 'EPSG:4326')
      console.log(t)
      // alert(t)
    }
  }
};
</script>

<style>
#map {
  height: 800px;
  width: 800px;
  margin: 0 auto;
}
/*隐藏ol的一些自带元素*/
.ol-attribution,
.ol-zoom {
  display: none;
}

</style>
