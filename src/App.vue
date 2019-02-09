<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

// Original script code
/*
   // your code goes here
   $(".dropdown-menu a").click(function(){
     var selText = $(this).text();
     $(this).parents('.input-group-append').find('.dropdown-toggle').html(
       selText+' <span class="caret"></span>');
   });

   $("button.btn.btn-outline-secondary").on('click', function(e) {
     $(this).css({
       'outline':'none !important',
       'box-shadow':'none'
     });
   });
*/

export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
