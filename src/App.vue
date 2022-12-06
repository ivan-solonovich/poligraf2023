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

#app {
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  /*background-image: url(../src/assets/rsz_v748-toon-61.jpg);*/
  /*  background-repeat: no-repeat;*/
  /*  background-size: cover;*/
  /*  background-origin: content-box;*/
}
</style>
