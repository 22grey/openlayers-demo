import Tile from 'ol/layer/Tile'
import View from 'ol/View'
import {XYZ} from 'ol/source'
import Map from 'ol/Map'

  
  var openStreetMapLayer = new Tile({
    source: new XYZ({
      // Open Street Map 地图层
      url:'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'

      //高德地图
      // url:'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'

      //Yahoo地图
      // tileSize: 512,
      // url:'https://{0-3}.base.maps.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/512/png8?lg=ENG&ppi=250&token=TrLJuXVK62IQk0vuXFzaig%3D%3D&requestid=yahoo.prod&app_id=eAdkWGYRoc4RfxVo0Z4B'
    })
});

// 创建地图
var map = new Map({
    layers: [
        openStreetMapLayer
    ],
    view: new View({
        // 设置成都为地图中心
        center: [104.06, 30.67],
        projection: 'EPSG:4326',
        zoom: 8
    }),
    target: 'map'
});

