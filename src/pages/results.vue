<template>
  <div class="active">
    <SearchHeader/>

    <SearchResults/>

    <SearchFooter/>
  </div>
</template>

<script>

import SearchHeader from '@/components/header';
import SearchResults from '@/components/results';
import SearchFooter from '@/components/footer';

export default {
  components: {
    SearchHeader,
    SearchResults,
    SearchFooter,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>


