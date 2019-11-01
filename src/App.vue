<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>
<script>

export default {
  data() {
    return {
      activeIndex2: '1'
    };
  },
  methods: {
    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  },
  
}
</script>

<style lang="scss">
 html,body{
   margin: 0;
   width: 100%;
   overflow: hidden;
 }
 a{
   list-style: none;
   text-decoration: none;
 }
 ul{
   list-style: none;
 }
</style>
