<template>
  <div>
    <ol-map
      class="map"
      ref="map"
      zoom="6"
      :center="center"
      :isShowBaseMap="true"
      :isScaleLine="true"
    ></ol-map>
    <div id="mouse-position">
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="天地图影像图" @change="changImage"></el-checkbox>
        <el-checkbox label="天地图影像标注" @change="changText"></el-checkbox>
        <!-- <el-checkbox label="复选框 C"></el-checkbox> -->
        <!-- <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>-->
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
import olMap from "../../../../components/map/ol-map";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer.js";
import { XYZ, TileWMS, Vector as VectorSource, Cluster } from "ol/source.js";
export default {
  data() {
    return {
      center: [113.4, 34.56],
      map: null,
      checkList: []
    };
  },
  components: {
    olMap
  },
  mounted() {
    this.map = this.$refs.map.map;
  },
  methods: {
    changImage: function(checked, e) {
      if (checked) {
        this.TiandiMap_img = new TileLayer({
          name: "天地图影像图层",
          source: new XYZ({
            url:
              "http://t0.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=5d27dc75ca0c3bdf34f657ffe1e9881d", //parent.TiandituKey()为天地图密钥
            wrapX: false
          })
        });
        // 添加到地图上
        this.map.addLayer(this.TiandiMap_img);
      } else {
        this.map.removeLayer(this.TiandiMap_img);
      }
    },
    changText: function(checked, e) {
      if (checked) {
        this.TiandiMap_cia = new TileLayer({
          name: "天地图影像注记图层",
          source: new XYZ({
            url:
              "http://t0.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=5d27dc75ca0c3bdf34f657ffe1e9881d", //parent.TiandituKey()为天地图密钥
            wrapX: false
          })
        });
        // 添加到地图上
        this.map.addLayer(this.TiandiMap_cia);
      } else {
        this.map.removeLayer(this.TiandiMap_cia);
      }
    }
  }
};
</script>

<style scoped>
/* 鼠标位置控件层样式设置 */
#mouse-position {
  float: left;
  position: absolute;
  top: 75px;
  right: 10px;
  width: 200px;
  height: 50px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  /*在地图容器中的层，要设置z-index的值让其显示在地图上层*/
  z-index: 2000;
  color: white;
}
.el-checkbox {
  color: white;
}
/* 鼠标位置信息自定义样式设置 */
.custom-mouse-position {
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-family: "微软雅黑";
}
</style>>
