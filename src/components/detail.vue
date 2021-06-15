<template>

  <h2>{{bdata[$route.params.id].title}}</h2>

  <div class="item1">
      <h3>{{bdata[$route.params.id].line1}}</h3>
      <div v-html="bdata[$route.params.id].con1"></div>
     
  </div>
  <div class="item1">
      <h3>{{bdata[$route.params.id].line2}}</h3>
      <div v-html="bdata[$route.params.id].con2"></div>
  </div>

   <button @click="change">글자없애기</button>
   <button @click="change1">글자보기</button>

</template>

<script>
 
export default {
    props:['bdata'],
    methods:{
        change:function(){
            const v = document.querySelectorAll("span");
            for(let i=0;i<v.length;i++){
                v[i].style.color = "white"
            }
        },
        change1:function(){
            const v = document.querySelectorAll("span");
            for(let i=0;i<v.length;i++){
                v[i].style.color = "red"
            }
        }
    }

}
</script>

<style>
span{color:red}
.item1{margin-bottom: 20px;}
.item1 div{font-size:1.5rem;}
button{padding: 10px;margin-right:10px;}
</style>