<template>

  <div class="title">
  <h2 class="mb20 tac">{{bdata2[$route.params.id].list}} : {{bdata2[$route.params.id].title}}</h2>
  <div v-if="$route.params.id != 0" class="left"><router-link :to="`/detail2/${Number($route.params.id)-1}`">이전</router-link></div>
    <div v-if="$route.params.id < 8" class="right"><router-link :to="`/detail2/${Number($route.params.id)+1}`">다음</router-link></div>
  </div>

  <div class="item1" @click="change">
      <h3 class="mb10">{{bdata2[$route.params.id].line1}}</h3>
      <div v-html="bdata2[$route.params.id].con1"></div>
     
  </div>
  <div class="item2"  @click="change1">
      <h3 class="mb10">{{bdata2[$route.params.id].line2}}</h3>
      <div v-html="bdata2[$route.params.id].con2"></div>
  </div>

   <!-- <button @click="change">글자없애기</button>
   <button @click="change1">글자보기</button> -->

</template>

<script>
let view1 = 1;
let view2 = 1;


export default {
    props:['bdata2'],
    methods:{
        change:function(){
            const v1 = document.querySelector(".item1");
            const list1 = v1.querySelectorAll("span")
            if(view1 == 1){
                for(let i=0;i<list1.length;i++){
                    list1[i].style.color = "white"
                }
                view1 = 0;
            }else{
                 for(let i=0;i<list1.length;i++){
                    list1[i].style.color = "red"
                }
                view1 = 1;

            }
        },

        change1:function(){
            const v2 = document.querySelector(".item2");
            const list2 = v2.querySelectorAll("span")
            if(view2 == 1){
                for(let i=0;i<list2.length;i++){
                    list2[i].style.color = "white"
                }
                view2 = 0;
            }else{
                 for(let i=0;i<list2.length;i++){
                    list2[i].style.color = "red"
                }
                view2 = 1;

            }
        },

        
    }

}
</script>

<style>
span{color:red}
.item1{margin-bottom: 40px;}
.item1 div,.item2 div{font-size:1.5rem;}
button{padding: 10px;margin-right:10px;}


.title{position: relative;margin-bottom:30px;}
.left,.right{width:50px;height: 50px;background: rgba(255,0,0,0.4);border-radius:25px;position: absolute;}
.left{left: 0;top: 0;}
.right{right: 0;top: 0;}
.left a,.right a{display: block;line-height: 50px;text-align: center;}
</style>