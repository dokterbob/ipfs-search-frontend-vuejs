<template>
  <b-row class="search-bar">
    <b-col class="d-flex justify-content-center">

      <b-input-group class="col-md-8 col-lg-8">
        <b-form-input
          placeholder="Search..."
          aria-label="Text input with dropdown button"
        />

        <b-input-group-append>
          <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filter</button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Any file</a>
            <a class="dropdown-item" href="#">Image</a>
            <a class="dropdown-item" href="#">Text</a>
            <a class="dropdown-item" href="#">Video</a>
            <a class="dropdown-item" href="#">Audio</a>
            <a class="dropdown-item" href="#">Directory</a>
          </div>

          <b-button variant="outline-secondary" class="search-button" @click="$router.push('/results/')">
            <span class="glyphicons glyphicons-search"></span>
          </b-button>

          <!-- Should be the following code, but that creates issues with rounding -->
          <!--
          <b-dropdown id="ddown1" text="Filter" variant="outline-secondary">
            <b-dropdown-item>Any file</b-dropdown-item>
            <b-dropdown-item>Image</b-dropdown-item>
            <b-dropdown-item>Text</b-dropdown-item>
            <b-dropdown-item>Video</b-dropdown-item>
            <b-dropdown-item>Audio</b-dropdown-item>
            <b-dropdown-item>Directory</b-dropdown-item>
          </b-dropdown>
          -->

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


