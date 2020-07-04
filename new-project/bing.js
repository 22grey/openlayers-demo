import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import BingMaps from "ol/source/BingMaps";

//必应地图

var layer1 = new TileLayer({
  visible: false,
  preload: Infinity,
  source: new BingMaps({
    key: "AkjzA7OhS4MIBjutL21bkAop7dc41HSE0CNTR5c6HJy8JKc7U9U9RveWJrylD3XJ", //必填、key要自己去申请哦
    imagerySet: "Road", //必填，可选值：Road、Aerial、AerialWithLabels、collinsBart、ordnanceSurvey
  }),
});

var layer2 = new TileLayer({
  source: new BingMaps({
    key: "AkjzA7OhS4MIBjutL21bkAop7dc41HSE0CNTR5c6HJy8JKc7U9U9RveWJrylD3XJ",
    imagerySet: "AerialWithLabels",
  }),
});

var map = new Map({
  layers: [layer1, layer2],
  target: "map",
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

var btn = document.getElementById("btn");
btn.onclick = () => {
  layer1.setVisible(true);
  layer2.setVisible(false);
};
