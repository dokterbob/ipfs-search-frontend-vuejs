<template>
  <b-row class="search-bar">
    <b-col class="d-flex justify-content-center">

      <b-input-group class="col-md-8 col-lg-8">
        <b-form-input
          placeholder="Search..."
          aria-label="Text input with dropdown button"
          v-model="query"
        />

        <b-input-group-append>
          <b-form-select v-model="type" :options="types" class="type-select"/>

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
    return {
      query: '',
      type: null,
      types: [
        { value: null, text: 'Filter' },
        { value: 'any', text: 'Any' },
        { value: 'video', text: 'Video' },
        { value: 'audio', text: 'Audio' },
        { value: 'text', text: 'Text' },
      ],
    };
  },
};
</script>

<style scoped>
.type-select {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>


