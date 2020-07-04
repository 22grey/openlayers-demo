<template>
  <div id="map" ref="rootmap"></div>
</template>

<script>
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import XYZ from 'ol/source/XYZ';
import ImageWMS from "ol/source/ImageWMS";
import { transform } from "ol/proj";

export default {
  name: "Tianditu",
  data() {
    return {
      map: null,
    };
  },

  mounted() {
    var mapcontainer = this.$refs.rootmap;
    // var layer1 = new TileLayer({
    //   source: new OSM({
    //     url: "http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg",
    //   }),
    // });

    // var layer2 = new TileLayer({
    //   title:"天地图路网",
    //   source: new XYZ({
    //     url: `http://t4.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}`, //mapkey为天地图密钥
    //     wrapX: false,
    //   }),
    // });

    // var wmsSource = new TileLayer({
    //   source: new ImageWMS({
    //     url: "http://localhost:8080/geoserver/bj_grid/wms",
    //     params: {
    //       FORMAT: "image/png",
    //       VERSION: "1.1.1",
    //       LAYERS: "bj_grid:capital",
    //     },
    //     serverType: "geoserver",
    //   }),
    // });

    var testsource = new TileLayer({
      source: new OSM({
        url: "http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg",
      }),
    });

var key = "5d353f120b2f03e260167bfbe07b210e"
    this.map = new Map({
      target: "map",
      layers: [new TileLayer({
        source: new ImageWMS({
          url:"http://t0.tianditu.gov.cn/vec_w/wmts?tk=5d353f120b2f03e260167bfbe07b210e"
        })
      })],
      view: new View({
        projection: "EPSG:4326", //使用这个坐标系
        center: [12000000, 4000000],
        zoom: 2,
      }),
    });
  },
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
