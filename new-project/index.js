import { Tile, Vector } from "ol/layer";
import View from "ol/View";
import { XYZ, OSM, Vector as SourceVector } from "ol/source";
import Map from "ol/Map";
import { Feature } from "ol";
import { Point, LineString } from "ol/geom";
import { fromLonLat, transform, get } from "ol/proj";
import { Icon, Style, Stroke } from "ol/style";
import {boundingExtent,getCenter} from 'ol/extent'

var gaode = new Tile({
  source: new XYZ({
    url:
      "http://webrd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
    projection: get("EPSG:4326"),
  }),
});


// 创建地图
var map = new Map({
  layers: [
    // new Tile({
    //   source: new OSM(),
    // }),
    gaode
  ],
  view: new View({
    // 设置成都为地图中心
    center: transform([110, 39], "EPSG:4326", "EPSG:3857"),
    projection: "EPSG:4326",
    zoom: 2,
  }),
  target: "map",
});

