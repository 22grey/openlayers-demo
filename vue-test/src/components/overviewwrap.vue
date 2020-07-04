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

export default {
  name: "overviewwrap",
  data() {
    return {
      map: null
    };
  },

  mounted() {
    var mapcontainer = this.$refs.rootmap;

    // 实例化鹰眼控件（OverviewMap），自定义其样式
    var overviewMapControl = new OverviewMap({
      className: "ol-overviewmap ol-custom-overviewmap", //鹰眼控件样式
      // 在鹰眼中加载相同坐标系下不同数据源的图层
      layers: [
        new TileLayer({
          source: new OSM({
            url: "http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
          })
        })
      ],
      collapseLabel: "\u00BB", //鹰眼控件展开时功能按钮上的标识
      label: "\u00AB", //鹰眼控件折叠时功能按钮上的标识
      collapsed: false //初始为展开方式
    });

    this.map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        projection: "EPSG:4326", //使用这个坐标系
        center: [12000000, 4000000], //设置初始中心
        zoom: 4 //地图初始显示中心
      }),
      controls: defaults().extend([overviewMapControl])
    });
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
.ol-custom-overviewmap,
.ol-custom-overviewmap.ol-uncollapsible {
  bottom: auto;
  left: auto;
  right: 0;
  /*右侧显示*/
  top: 0;
  /*顶部显示*/
}
/* 鹰眼控件中地图容器的样式 */
.ol-custom-overviewmap .ol-overviewmap-map {
  border: none;
  width: 300px;
}
/* 在鹰眼控件中显示当前窗口中主图区域的边框 */
.ol-custom-overviewmap .ol-overviewmap-box {
  border: 2px solid red;
}
/* 在鹰眼控件张开时其控件按钮图标的样式 */
.ol-custom-overviewmap:not(.ol-collapsed) button {
  bottom: auto;
  left: auto;
  right: 1px;
  top: 1px;
}
</style>
