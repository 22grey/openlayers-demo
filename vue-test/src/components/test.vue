<template>
  <div id="map" ref="rootmap"></div>
</template>

<script>
import "ol/ol.css";
import Feature from "ol/Feature";
import Map from "ol/Map";
import View from "ol/View";
import VectorSource from 'ol/source/Vector';
import GeoJSON from "ol/format/GeoJSON";
import Circle from "ol/geom/Circle";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import {OSM ,WMTS} from "ol/source";
import WebGLPoints  from 'ol/layer/WebGLPoints'

export default {
  name: "Test",
  data() {
    return {
      map: null
    };
  },

  mounted() {
    var mapcontainer = this.$refs.rootmap;

     let vectorSource = new VectorSource({
        url: 'https://openlayers.org/en/latest/examples/data/geojson/world-cities.geojson',
        format: new GeoJSON()
    });

    let pointLayer = new WebGLPoints({
        source: vectorSource,
        style: {
            "symbol": {
                "symbolType": "circle",
                "size": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "get",
                        "population"
                    ],
                    40000,
                    8,
                    2000000,
                    28
                ],
                "color": "#006688",
                "rotateWithView": false,
                "offset": [
                    0,
                    0
                ],
                "opacity": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "get",
                        "population"
                    ],
                    40000,
                    0.6,
                    2000000,
                    0.92
                ]
            }
        }
    });

    var map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        pointLayer
      ],
      target: "map",
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });



    // this.map.addLayer(pointLayer);

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
