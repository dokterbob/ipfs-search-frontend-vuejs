<template>
  <div>
    <SearchHeader/>

    <SearchFooter/>
  </div>
</template>

<script>

import SearchHeader from '@/components/header';
import SearchFooter from '@/components/footer';

export default {
  components: {
    SearchHeader,
    SearchFooter,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>


