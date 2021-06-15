<template>
  <div>
      <ul class="vlist">
          <li v-for="(a,i) in bdata" :key="i">
             <router-link :to="`/detail/${bdata[i].idx}`"> {{bdata[i].list}} {{bdata[i].title}}</router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:['bdata']

}
</script>

<style>
.vlist li{font-size:2rem;margin-bottom:10px;}
</style>