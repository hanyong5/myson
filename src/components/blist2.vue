<template>

  <div>
      <ul class="vlist">
          <li v-for="(a,i) in bdata2" :key="i">
             <router-link :to="`/detail2/${bdata2[i].idx}`"> <span class="round">{{bdata2[i].list}}</span> {{bdata2[i].title}}</router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:['bdata2']

}
</script>

<style>
.vlist li{font-size:1.2rem;margin-bottom:20px;}
.vlist li a{line-height:30px;font-weight:bold}
.round{display:inline-block;font-size:1rem;background:skyblue;color:white;width:60px;text-align:center;
  line-height:30px;border-radius:10px;margin-right:5px
  }

</style>