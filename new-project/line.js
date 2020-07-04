import { Tile, Vector } from "ol/layer";
import View from "ol/View";
import { XYZ, OSM,Vector as sourceVector } from "ol/source";
import Map from "ol/Map";
import { Feature } from "ol";
import { Point, LineString } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { Icon,Style, Stroke } from "ol/style";

var saoguan = new Feature({
  geometry: new LineString( [[113.5991,24.8166], [124.5991,35.8166]]),
});

saoguan.setStyle(
  new Style({
   stroke:new Stroke({
    width: 3,
    color: [255, 0, 0, 1]
   })
  })
);

var source = new sourceVector({
  features: [saoguan],
});

var layer = new Vector({
    source: source
});

// 创建地图
var map = new Map({
  layers: [
    new Tile({
      source: new OSM(),
    }),
    layer
  ],
  view: new View({
    // 设置成都为地图中心
    center: fromLonLat([113.5991,24.8166]),
    projection: "EPSG:4326",
    zoom: 2,
  }),
  target: "map",
});
