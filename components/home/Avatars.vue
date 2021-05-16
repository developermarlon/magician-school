<template lang="pug">
  v-container(pl-0 pr-0)
    v-slide-group(active-class="success" show-arrows dark)
      v-slide-item(v-for="(item, idx) in users" :key="idx" v-slot="{ active, toggle }")
        v-tooltip(bottom)
          template(v-slot:activator="{ on, attrs }")
            nuxt-link(:to="{ name: 'filter', params: { filter_user: true, user: item, name_filter, url_api }}")
              v-avatar(v-on="on" v-bind="attrs" left size="100" class="mr-5 cursor-pointer")
                v-img(:src="item.image" :alt="item.name" transition="scroll-x-reverse-transition")
                  template(v-slot:placeholder)
                    v-row(class="fill-height ma-0" align="center" justify="center")
                      v-progress-circular(indeterminate color="grey lighten-5")
          span(class="font-family-raleway-bold") {{item.name}}
</template>

<script>
export default {
  name: 'Avatars',
  data: () => ({
    results: []
  }),
  props: {
    users: {
      type: Array,
      required: true,
      default: []
    },
    name_filter: {
      type: String,
      required: true,
      default: null
    },
    url_api: {
      type: String,
      required: true,
      default: null
    }
  },
  methods: {
    async getResults(){
      try{
        const _RES = await this.$axios.get('/api/characters/students')
        this.results = _RES.data
      }catch(error) {
        console.log(error)
      }
    }
  },
  created() {
    this.getResults()
  }
}
</script>

<style lang="scss" scoped>
</style>
