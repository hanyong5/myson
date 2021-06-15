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
#app{padding: 20px;}
</style>