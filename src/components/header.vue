<template>
  <header class="header-wrapper">
    <b-container>
      <b-row class="identity d-flex justify-content-center">
        <b-col class="identity-wrapper">
        <h1 class="d-flex justify-content-center">
          <router-link to="/">
            <img src="@/assets/logo_white_bright.svg" alt="ipfs-search.com" />
          </router-link>
        </h1>
        </b-col>
      </b-row>

      <search-bar />

    </b-container>
  </header>
</template>

<script>
import SearchBar from '@/components/search-bar';

export default {
  components: {
    SearchBar,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>


