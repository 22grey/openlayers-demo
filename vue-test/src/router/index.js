import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Olmaps from '../components/Olmaps'
import Tianditu from '../components/Tianditu.vue'
import getCoordinate from '../components/getCoordinate'
import overviewwrap from '../components/overviewwrap'
import bingmap from '../components/bingmap.vue'
import graticule from '../components/graticule.vue'
import GeoJSON from '../components/GeoJSON.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test
    },{
      path:'/olmaps',
      name:'Olmaps',
      component:Olmaps
    },{
      path:'/tianditu',
      name:'Tianditu',
      component:Tianditu
    },{
      path:'/getCoordinate',
      name:'getCoordinate',
      component:getCoordinate
    },
    {
      path:'/overviewwrap',
      name:'overviewwrap',
      component:overviewwrap
    },{
      path:'/bingmap',
      name:"bingmap",
      component:bingmap
    },
    {
      path:'/graticule',
      name:"graticule",
      component:graticule
    },
    {
      path:'/GeoJSON',
      name:"GeoJSON",
      component:GeoJSON
    }
    
  ]
})
