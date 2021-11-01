<template>

  <div>
      <ul class="vlist">
          <li v-for="(a,i) in bdata3" :key="i">
             <router-link :to="`/detail3/${bdata3[i].idx}`"> <span class="round">{{bdata3[i].list}}</span> {{bdata3[i].title}}</router-link><br>
             <span class="list"></span>{{bdata3[i].line1}} / {{bdata3[i].line2}} 
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:['bdata3']
}
</script>

<style>
.vlist li{font-size:1.2rem;margin-bottom:20px;}
.vlist li a{line-height:30px;font-weight:bold}
.round{display:inline-block;font-size:1rem;background:skyblue;color:white;width:60px;text-align:center;
  line-height:30px;border-radius:10px;margin-right:5px
  }
  .list{display: inline-block;width: 70px;}
</style>
