import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import {Attribution,FullScreen} from 'ol/control'
import OSM from 'ol/source/OSM';
import {defaults} from 'ol/control'

//显示版权和全屏按钮
var attribution1 = new Attribution();//这是版权控件

var FullScreen1 = new FullScreen();//这是全屏控件

    var map = new Map({
        layers: [
            new TileLayer({
                source: new OSM()
            })
        ],
        controls: [attribution1,FullScreen1],//如果不设置 controls ，地图会默认设置
        // controls:defaults({attribution: false}).extend([attribution1]),
        target: 'map',
        view: new View({
            center: [0, 0],
            zoom: 2
        })
    });


    function checkSize() {
        var small = map.getSize()[0] < 600;
        attribution.setCollapsible(small);
        attribution.setCollapsed(small);
    }

    window.addEventListener('resize', checkSize);
    checkSize();