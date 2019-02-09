<template>
  <div id="app">

    <div class="header-wrapper">
      <b-container>
        <div class="row identity d-flex justify-content-center">
          <div class="col identity-wrapper">
            <h1 class="d-flex justify-content-center">
              <a href="https://ipfs-search.com">
                <img src="./assets/logo_white_bright.svg" alt="ipfs-search.com" />
              </a>
            </h1>
          </div>
        </div>

        <div class="row search-bar">
          <div class="col d-flex justify-content-center">
            <b-input-group class="col-md-8 col-lg-8">
              <b-form-input
                placeholder="Search..."
                aria-label="Text input with dropdown button"
              />

              <b-input-group-append>

                <b-dropdown id="ddown1" text="Filter" variant="outline-secondary">
                  <b-dropdown-item>Any file</b-dropdown-item>
                  <b-dropdown-item>Image</b-dropdown-item>
                  <b-dropdown-item>Text</b-dropdown-item>
                  <b-dropdown-item>Video</b-dropdown-item>
                  <b-dropdown-item>Audio</b-dropdown-item>
                  <b-dropdown-item>Directory</b-dropdown-item>
                </b-dropdown>

                <b-button variant="outline-secondary" class="search-button">
                  <span class="glyphicons glyphicons-search"></span>
                </b-button>

              </b-input-group-append>

            </b-input-group>
          </div>
        </div>
      </b-container>
    </div>

    <div class="footer-wrapper">
      <b-container>
        <div class="row d-flex justify-content-center">
          <div class="links">
            <a class="btn btn-light btn-sm" role="button" href="https://api.ipfs-search.com/">API</a>
            <a class="btn btn-light btn-sm" role="button" href="https://github.com/ipfs-search/ipfs-search">Code</a>
            <a class="btn btn-light btn-sm" role="button" href="mailto:info@ipfs-search.com">Contact</a>
          </div>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="rpio">Proudly sponsored by <a href="https://redpencil.io/">redpencil.io</a></div>
        </div>

      </div>
    </b-container>
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
