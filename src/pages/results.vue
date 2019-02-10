<template>
  <div class="active">
    <SearchHeader/>

    <SearchResults/>

    <SearchFooter/>

    <SearchPreview/>
  </div>
</template>

<script>

import SearchHeader from '@/components/header';
import SearchResults from '@/components/results';
import SearchFooter from '@/components/footer';
import SearchPreview from '@/components/preview';

export default {
  components: {
    SearchHeader,
    SearchResults,
    SearchPreview,
    SearchFooter,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>


