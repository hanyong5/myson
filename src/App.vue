<template>
  <top-header />
  <router-view :bdata="bdata" />
</template>

<script>
import bdata from './bdata.js'
import header from './components/header.vue'


export default {
  name:'app',
  data(){
    return{
      bdata:bdata
    }
  },
  components:{
    'top-header':header
  }
}
</script>

<style>
*{margin:0;padding:0}
a:link,a:visited{text-decoration: none;color:#333}
li{list-style:none}
#app{padding: 20px;}

.tac{text-align:center !important}
.mb10{margin-bottom:10px !important}
</style>