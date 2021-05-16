<template lang="pug">
  v-container(fluid pa-0 class="container-navbar elevation-15")
    v-container
      v-layout(justify-space-between align-center)
        v-flex(auto)
          v-img(class="icon" :src="require('~/assets/images/navbar/icon.svg')" width="120")
        v-flex(xs12 class="d-flex justify-end")
          v-btn(color="primary" class="white--text" small fab)
              v-icon(dark) menu
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
<style lang="scss" scoped>
  .container-navbar {
    position: fixed;
    top: 0px;
    z-index: 50;
    background: var(--v-background-base);
  }
</style>
