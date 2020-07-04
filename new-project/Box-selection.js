import 'ol/ol.css'
import {Tile as TileLayer,Vector} from 'ol/layer'
import View from 'ol/View'
import {Vector as SourceVector, OSM} from 'ol/source'
import Map from 'ol/Map'
import {GeoJSON} from 'ol/format'
import {Select,DragBox} from 'ol/interaction'
import {platformModifierKeyOnly} from 'ol/events/condition'


// 创建地图
var map = new Map({
    layers: [
      new TileLayer({
        source:new OSM()
      }),
        new Vector({
          source: new SourceVector({
            url:'data/geojson/countries.geojson',
            format:new GeoJSON()
          })
        })
    ],
    interactions:[
      new Select(),
      new DragBox({
        condition:platformModifierKeyOnly
      }) //画框
    ],
    view: new View({
        center: [0,0],
        projection: 'EPSG:4326',
        zoom: 2
    }),
    target: 'map'
});


var select = new Select()
map.addInteraction(select)

var selectedFeatures = select.getFeatures()

var dragBox = new DragBox({
  condition: platformModifierKeyOnly
});

map.addInteraction(dragBox);

dragBox.on('boxend', function() {
  var rotation = map.getView().getRotation();
  var oblique = rotation % (Math.PI / 2) !== 0;
  var candidateFeatures = oblique ? [] : selectedFeatures;
  var extent = dragBox.getGeometry().getExtent();
  vectorSource.forEachFeatureIntersectingExtent(extent, function(feature) {
    candidateFeatures.push(feature);
  });

  if (oblique) {
    var anchor = [0, 0];
    var geometry = dragBox.getGeometry().clone();
    geometry.rotate(-rotation, anchor);
    var extent$1 = geometry.getExtent();
    candidateFeatures.forEach(function(feature) {
      var geometry = feature.getGeometry().clone();
      geometry.rotate(-rotation, anchor);
      if (geometry.intersectsExtent(extent$1)) {
        selectedFeatures.push(feature);
      }
    });
  }

});

dragBox.on('boxstart', function() {
  selectedFeatures.clear();
});

var infoBox = document.getElementById('info');

selectedFeatures.on(['add', 'remove'], function() {
  var names = selectedFeatures.getArray().map(function(feature) {
    return feature.get('name');
  });
  if (names.length > 0) {
    infoBox.innerHTML = names.join(', ');
  } else {
    infoBox.innerHTML = 'No countries selected';
  }
});