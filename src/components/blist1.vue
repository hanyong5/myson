<template>

  <div>
      <ul class="vlist">
          <li v-for="(a,i) in bdata1" :key="i">
             <router-link :to="`/detail1/${bdata1[i].idx}`"> <span class="round">{{bdata1[i].list}}</span> {{bdata1[i].title}}</router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:['bdata1']

}
</script>

<style>
.vlist li{font-size:1.2rem;margin-bottom:20px;}
.vlist li a{line-height:30px;font-weight:bold}
.round{display:inline-block;font-size:1rem;background:red;color:white;width:60px;text-align:center;
  line-height:30px;border-radius:10px;margin-right:5px
  }

</style>