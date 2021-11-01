<template>
  <top-header />
  <router-view  :bdata1="bdata1" :bdata2="bdata2" :bdata3="bdata3" />
</template>

<script>
import bdata1 from './bdata1.js'
import bdata2 from './bdata2.js'
import bdata2 from './bdata3.js'
import header from './components/header.vue'


export default {
  name:'app',
  data(){
    return{
      bdata2:bdata2,
      bdata1:bdata1,
      bdata3:bdata3
    }
  },
  components:{
    'top-header':header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
body{font-family: 'Roboto', sans-serif;}
*{margin:0;padding:0}
a:link,a:visited{text-decoration: none;color:#333}
li{list-style:none}
#app{padding: 20px;}

.tac{text-align:center !important}
.mb10{margin-bottom:10px !important}
.mb20{margin-bottom:20px !important}

.router-link-active{background:#ddd}
</style>
