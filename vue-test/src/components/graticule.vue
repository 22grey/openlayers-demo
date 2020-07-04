<template>
  <div id="map" ref="rootmap"></div>
</template>

<script>
import "ol/ol.css";
import Feature from "ol/Feature";
import Map from "ol/Map";
import View from "ol/View";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import Circle from "ol/geom/Circle";
import { Tile as TileLayer, Vector as VectorLayer, WMS } from "ol/layer";
import { OSM, WMTS } from "ol/source";
import Points from "ol/layer/WebGLPoints";
import Graticule from "ol/layer/Graticule";
import Stroke from 'ol/style/Stroke'

export default {
  name: "Test",
  data() {
    return {
      map: null
    };
  },

  mounted() {
    var mapcontainer = this.$refs.rootmap;

    var map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: "map",
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });

    var graticuleLayer = new Graticule({
      // map: map,
      strokeStyle: new Stroke({
        color: "rgba(12, 12, 12, 0.8)",
        width: 0.6
      }),
      targetSize: 100
    });

    graticuleLayer.setMap(map);

    // console.log("1111",vectorlayer.getSource().getFeatures())
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
