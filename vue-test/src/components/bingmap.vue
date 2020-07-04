<template>
  <div id="map" ref="rootmap"></div>
</template>

<script>
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { transform } from "ol/proj";
import { OverviewMap, defaults } from "ol/control";
import BingMaps from "ol/source/BingMaps";

export default {
  name: "bingmap",
  data() {
    return {
      map: null
    };
  },

  mounted() {
    var mapcontainer = this.$refs.rootmap;

    var layer1 = new TileLayer({
      source: new BingMaps({
        key: "AkjzA7OhS4MIBjutL21bkAop7dc41HSE0CNTR5c6HJy8JKc7U9U9RveWJrylD3XJ", //必填、key要自己去申请哦
        imagerySet: "Road" //必填，可选值：Road、Aerial、AerialWithLabels、collinsBart、ordnanceSurvey
      })
    });

    // var layer2 = new TileLayer({
    //   source: new BingMaps({
    //     key: "AkjzA7OhS4MIBjutL21bkAop7dc41HSE0CNTR5c6HJy8JKc7U9U9RveWJrylD3XJ",
    //     imagerySet: "AerialWithLabels"
    //   })
    // });

    this.map = new Map({
      target: "map",
      layers: [layer1],
      view: new View({
        projection: "EPSG:4326", //使用这个坐标系
        center: [104.06, 30.67], //设置初始中心
        zoom: 8 //地图初始显示中心
      })
    });

    var elmap = document.getElementById("map");

    //获取鼠标位置
    elmap.onclick = e => {
      var t = transform(
        this.map.getEventCoordinate(e),
        "EPSG:3857",
        "EPSG:4326"
      );
      console.log(t);
      // alert(t)
    };
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
