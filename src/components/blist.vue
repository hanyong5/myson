<template>
  <div>
      <ul class="vlist">
          <li v-for="(a,i) in bdata" :key="i">
             <router-link :to="`/detail/${bdata[i].idx}`"> <span class="round">{{bdata[i].list}}</span> {{bdata[i].title}}</router-link>
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
.vlist li{font-size:1.2rem;margin-bottom:20px;}
.vlist li a{line-height:30px;font-weight:bold}
.round{display:inline-block;font-size:1rem;background:skyblue;color:white;width:60px;text-align:center;
  line-height:30px;border-radius:10px;margin-right:5px
  }

</style>