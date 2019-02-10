<template>
  <b-modal :id="id" size="lg" :hide-footer="true" :lazy="true">
    <template slot="modal-title">{{ title }}</template>

    <template>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

      <dl class="row mt-3">
        <dt class="col-sm-3">
          Description
        </dt>
        <dd class="col-sm-9">
          QmYwFSJG5ctKQHc3vxn5dw8P4xk9ZmQm1T9Hu93TZ7pA9J
        </dd>

        <dt class="col-sm-3">
          Euismod
        </dt>
        <dd class="col-sm-9">
          Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
        </dd>

        <dt class="col-sm-3">
          Malesuada
        </dt>
        <dd class="col-sm-9">
          Etiam porta sem malesuada magna mollis euismod.
        </dd>
      </dl>

      <div class="embed-responsive embed-responsive-16by9">
        <video class="embed-responsive-item" src="http://ipfs.io/ipfs/QmaJBA94psr7LDRk3TGwAUgaKA6P1MHPph5DSHMxLeNqK6" controls="" preload="metadata"></video>
      </div>
      <p>&nbsp;</p>
      <div class="embed-responsive">
        <audio controls="controls">
          <source src="http://ipfs.io/ipfs/QmepCXNy87j2ZRe4UCqFENP8sZrNttLRkdbQhYieuigS5H">
        </audio>
      </div>
    </template>

  </b-modal>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
  },
  data() {
    return {};
  },
};
</script>


