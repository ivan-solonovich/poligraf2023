<template>
<div>
    <HomeMain></HomeMain>

</div>

</template>

<script>

import HomeMain from './components/HomeMain.vue'

export default {
  name: 'App',
  components: {
    HomeMain
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  a{

    list-style: none;
  }


</style>
