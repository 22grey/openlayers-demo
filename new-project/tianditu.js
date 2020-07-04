import { Tile, Vector } from "ol/layer";
import View from "ol/View";
import { XYZ, OSM,Vector as sourceVector } from "ol/source";
import Map from "ol/Map";
import { Feature } from "ol";
import { Point, LineString } from "ol/geom";
import { fromLonLat,transform } from "ol/proj";
import { Icon,Style, Stroke } from "ol/style";

var tianditu1 = new Tile({
  source:new XYZ({
    url: 'http://t3.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=5d353f120b2f03e260167bfbe07b210e'
  })
})

var tianditu2 = new Tile({
  source:new XYZ({
    url: 'http://t3.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=5d353f120b2f03e260167bfbe07b210e'
  })
})
var satellite = new Tile({
  source:new XYZ({
    url: 'http://t3.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=5d353f120b2f03e260167bfbe07b210e'
  })
})
// 创建地图
var map = new Map({
  layers: [
    // new Tile({
    //   source: new OSM(),
    // }),
    tianditu1,
    tianditu2,
    // satellite
  ],
  view: new View({
    // 设置成都为地图中心
    center: transform([110,39],"EPSG:4326","EPSG:3857"),
    projection: "EPSG:4326",
    zoom: 2,
  }),
  target: "map",
});
