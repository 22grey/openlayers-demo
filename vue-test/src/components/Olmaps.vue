<template>
  <div id="map" ref="rootmap">
    <select id="type">
      <option value="0">谷歌行政图</option>
      <option value="1">谷歌影像图</option>
      <option value="2">高德行政图</option>
      <option value="3">高德影像图</option>
    </select>
  </div>
</template>

<script>
import Olmaps from "olmaps";

export default {
  name: "Olmaps",
  data() {
    return {
      map: null
    };
  },

  mounted() {
    var mapcontainer = this.$refs.rootmap;
    this.map = new Olmaps({
      target: "map",
      center: [116.39786526, 39.92421163],
      zoom: 16,
      minZoom: 10,
      maxZoom: 20,
      mapSrc: [
        {
          name: "谷歌地图",
          src: `http://mt1.google.cn/vt/lyrs=m@298&hl=zh-CN&gl=cn&scale=1&z={z}&y={y}&x={x}`,
          visible: true,
          id: "1" // 唯一标识
        }
      ]
    });

    // console.log("222",typeof(this.map.setMapType))
    setTimeout(() => {
      //   this.map.setMapCenter([116.39786526, 39.92421163]);
      //   this.map.setMapType('2');
      //   this.map.zoomIn();
    }, 2000);

    // var select = document.getElementById("type");
    // select.onchange = event => {
    //   console.log("111", event.target.value);
    //   const selectedVlaue = event.target.value;
    //   this.map.setMapType(selectedVlaue);
    // };

    this.map.addMarker([
      {
        latitude: "39.92421163",
        longitude: "116.39786526",
        name: "单杆-1",
        type: "",
        drag: true
      },
      {
        latitude: "39.92629634",
        longitude: "116.39593675",
        name: "单杆-10",
        type: ""
      }
    ]);

    this.map.addLine([
      {
        data: [
          ["116.39786526", "39.92421163"],
          ["116.39593675", "39.92629634"]
        ],
        color: "green",
        textColor: "green",
        showDistance: true,
        type: "dash"
      },
      {
        data: [
          ["116.39593675", "39.92629634"],
          ["116.39670252", "39.92647015"]
        ],
        color: "red",
        textColor: "green",
        showDistance: false,
        type: "line"
      },
      {
        data: [
          ["116.39670252", "39.92647015"],
          ["116.39473110", "39.92293218"]
        ],
        color: "green",
        textColor: "red",
        showDistance: true,
        type: "line"
      }
    ])[
      // result -> info
      ({
        data: [
          ["116.39786526", "39.92421163"],
          ["116.39593675", "39.92629634"]
        ],
        color: "green",
        textColor: "green",
        showDistance: true,
        type: "dash",
        olId: "d1afa649-6b73-4fad-ab49-801e256da11b"
      },
      {
        data: [
          ["116.39593675", "39.92629634"],
          ["116.39670252", "39.92647015"]
        ],
        color: "red",
        textColor: "green",
        showDistance: false,
        type: "line",
        olId: "d1afa649-6b73-4fad-ab49-801e256da11b"
      },
      {
        data: [
          ["116.39670252", "39.92647015"],
          ["116.39473110", "39.92293218"]
        ],
        color: "green",
        textColor: "red",
        showDistance: true,
        type: "line",
        olId: "d1afa649-6b73-4fad-ab49-801e256da11b"
      })
    ];

//圆圈
    // this.map.addCircle({
    //   center: [116.39786526, 39.92421163],
    //   radius: 100
    // })[
    //   // return -> info
    //   "689dc349-2bfa-4eed-8173-82cc2c76cacb"
    // ];

    // //多边形
    // this.map.addPolygon({
    //   data: [
    //     ["116.39786526", "39.92421163"],
    //     ["116.39593675", "39.92629634"],
    //     ["116.39670252", "39.92647015"],
    //     ["116.39473110", "39.92293218"]
    //   ],
    //   id: "887777",
    //   fill: "yellow"
    // })[
    //   // return
    //   "689dc349-2bfa-4eed-8173-82cc2c76cacb"
    // ];

    // 描边
    this.map.addMultiPolygon({
      data: [
        [
          ["116.39786526", "39.92421163"],
          ["116.39593675", "39.92629634"],
          ["116.39670252", "39.92647015"],
          ["116.39473110", "39.92293218"]
        ]
      ],
      name: "",
      id: ""
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
#type {
  width: 100px;
  padding: 5px;
}
</style>
