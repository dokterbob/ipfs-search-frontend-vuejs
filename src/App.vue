<template>
  <div id="app">

    <div class="header-wrapper">
      <div class="container">

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
              <div class="col-md-8 col-lg-8 input-group">
                <input type="text" class="form-control" placeholder="Search..." aria-label="Text input with dropdown button">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filter</button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">Any file</a>
                    <a class="dropdown-item" href="#">Image</a>
                    <a class="dropdown-item" href="#">Text</a>
                    <a class="dropdown-item" href="#">Video</a>
                    <a class="dropdown-item" href="#">Audio</a>
                    <a class="dropdown-item" href="#">Directory</a>
                  </div>
                  <button class="btn btn-outline-secondary search-button" type="button">
                    <span class="glyphicons glyphicons-search"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>

    <div class="footer-wrapper">
      <div class="container">
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
    </div>

  </div>
</template>

<script>
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
