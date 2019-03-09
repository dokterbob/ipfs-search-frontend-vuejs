<template>
  <b-row class="search-bar">
    <b-col class="d-flex justify-content-center">
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

      <b-button variant="outline-secondary" class="search-button" @click="$router.push('/results/')">
        <span class="glyphicons glyphicons-search"></span>
      </b-button>

      </b-input-group-append>

    </b-input-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>


