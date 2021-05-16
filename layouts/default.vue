<template lang="pug">
  v-app(id="inspire" :dark="setTheme")
    v-slide-y-transition(mode="out-in")
      div
        generalNavbar
        Nuxt
    //- v-switch(:label="`Dark Theme`" v-model="goDark")
</template>

<script>
export default {
  name: 'Default',
  opts: {
    theme: {
      dark: false
    }
  },
  data() {
    return {
      goDark: false
    };
  },
  created() {
    // this.$nextTick(() => {
    //   this.$vuetify.theme.themes.light.primary = '#4caf50'
    // })
  },
  methods: {
  },
  computed: {
    setTheme() {
      if (this.goDark == true) {
        return (this.$vuetify.theme.dark = true);
      } else {
        return (this.$vuetify.theme.dark = false);
      }
    }
  }
}
</script>
