<template>
  <h1 class="mb10">제자반</h1>
  <ul class="menu clearfix mb20">
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/list1">1권</router-link></li>
      <li><router-link to="/list2">2권</router-link></li>
      <li><router-link to="/list3">3권</router-link></li>
      
  </ul>
</template>

<script>

export default {

}
</script>

<style>
 h1{font-size:1.5rem;text-align: center;}
 .menu{display:flex;border-top:1px solid #555;border-bottom:1px solid #555}
 .menu li{flex:1;line-height:40px;text-align: center;}
 .menu a{display:block;line-height:40px}
</style>
