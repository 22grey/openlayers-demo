// 地图对象
import Map from "ol/Map.js";
// 视图
import View from "ol/View.js";
// 加载图层类型
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
// 加载资源类型
import { XYZ, TileWMS, Vector as VectorSource, Cluster } from 'ol/source.js';
// 比例尺
import ScaleLine from "ol/control/ScaleLine";
class zMap {
    constructor(option) {
        if (option)
            return this.initMap(option)
    }
    /**
     * 说明：初始化地图，
     * 参数 center：地图中心点
     * 参数 zoom  : 地图缩放级别
     * 参数 target：地图容器id
     * @param {*} option 
     */
    initMap(option) {
        // 定义默认参数
        var parmas = {
            center: [0, 0],
            zoom: 2,
            target: "map"
        }
        // 合并默认参数和自定义参数
        parmas = { ...parmas, ...option }
        // 创建地图对象
        const map = new Map({
            target: parmas.target,
            view: new View({
                projection: "EPSG:4326",
                ...parmas
            })
        });
        return map
    }
    /**
     * 说明：显示比例尺
     * @param {*} map 
     */
    showScaleLine(map) {
        //实例化比例尺控件（ScaleLine）
        const scaleLineControl = new ScaleLine({
            //设置比例尺单位，degrees、imperial、us、nautical、metric（度量单位）
            units: "metric"
        });
        map.addControl(scaleLineControl);
    }
    /**
     * 说明：显示天地图矢量数据
     * option   可选参数对象
     * 参数 key        天地图的tk值
     * 参数 showtext   是否显示矢量地图的标注信息
     * @param {*} map     显示天地图的地图对象
     * @param {*} option   可选参数对象
     * 参数 key        天地图的tk值
     * 参数 showtext   是否显示矢量地图的标注信息
     */
    tiandituVetorMap(map, option) {
        let params = {
            key: "5d27dc75ca0c3bdf34f657ffe1e9881d",
            showtext: true
        }
        params = { ...params, ...option }
        /**
        * 加载天地图的矢量图层
        */
        let TiandiMap_vec = new TileLayer({
            name: '天地图矢量图层',
            source: new XYZ({
                url: 'http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=' + params.key, //mapkey为天地图密钥
                wrapX: false,
            }),
        });
        // 添加到地图上
        map.addLayer(TiandiMap_vec);
        let layers = [TiandiMap_vec]
        /**
         * 添加天地图适量的标注信息
         */
        if (params.showtext == true) {
            let TiandiMap_cva = new TileLayer({
                name: '天地图矢量注记图层',
                source: new XYZ({
                    url: 'http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=' + params.key, //mapkey为天地图密钥
                    wrapX: false,

                }),
            });
            map.addLayer(TiandiMap_cva);
            layers.push(TiandiMap_cva)
        }
        // 返回图层名称
        return layers
    }
}

export default zMap