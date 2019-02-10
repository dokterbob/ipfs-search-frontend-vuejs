<template>
  <div class="landing-wrapper">
    <SearchHeader/>

    <div class="footer-wrapper">
      <b-container>
        <b-row class="d-flex justify-content-center">
          <div class="links">
            <a class="btn btn-light btn-sm" role="button" href="https://api.ipfs-search.com/">API</a>
            <a class="btn btn-light btn-sm" role="button" href="https://github.com/ipfs-search/ipfs-search">Code</a>
            <a class="btn btn-light btn-sm" role="button" href="mailto:info@ipfs-search.com">Contact</a>
          </div>
        </b-row>

        <b-row class="d-flex justify-content-center">
          <div class="rpio">Proudly sponsored by <a href="https://redpencil.io/">redpencil.io</a></div>
        </b-row>
      </b-container>
    </div>

  </div>
</template>

<script>

import SearchHeader from '@/components/header';

export default {
  components: { SearchHeader },
  data() {
  },
};
</script>

<style scoped>
</style>


