<template>
  <header class="search-header">
    <b-container>
      <b-row class="identity d-flex justify-content-center">
        <b-col class="identity-wrapper">
        <h1 class="d-flex justify-content-center">
          <a href="https://ipfs-search.com">
          <img src="@/assets/logo_white_bright.svg" alt="ipfs-search.com" />
          </a>
        </h1>
        </b-col>
      </b-row>

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
    </b-container>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/includes/colors.scss";

.search-header {
  z-index: 1;
  position:fixed;
  top:0px;
  left:0;
  right:0;
  height:50vh;
  background-image: url("../assets/background-02.png");
  background-color: $dark-color;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  transition: top 0.1s ease-in-out;
  .container {
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    .identity {
      position:absolute;
      left:0;
      right:0;
      bottom:58px;
      h1 {
        a {
          img {
            width:388px;
          }
        }
      }
    }
    .search-bar {
      position:absolute;
      bottom:0;
      left:0;
      right:0;
      margin-bottom: 15px;
      .glyphicons-search {
        position: absolute;
        font-size:28px;
        color: darken( $white-color, 30% );
        left:-3px;
        top:0;
      }
    }
  }

}

.active {
  .search-header {
    background-image: none;
    height:132px;
    .container {
      .identity {
        top:15px;
        .identity-wrapper {
          h1 {
            a {
              img {
                width:288px;
              }
            }
          }
        }
      }
    }
  }
}
</style>


