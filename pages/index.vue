<template lang="pug">
  //- GENERAL CONTAINER
  v-container(fluid pa-0)
    generalNavbar
    //- CAROUSESL HOUSES
    v-container(fluid pa-0)
      homeCarousel

    //- CONTENT STUDENTS
    v-container(fluid mt-n16)
      v-container
        v-layout(justify-space-between)
          v-flex(auto)
            h1(class="title white--text text-h6 font-family-raleway-bold")= 'Students'
          v-flex(xs12 class="d-flex justify-end")
            v-btn(:to="{name: 'filter', params: {name_filter: 'Students', url_api: '/api/characters/students'} }" color="secondary" class="white--text" small fab)
              v-icon(dark) arrow_forward
      v-container(pa-0)
        homeAvatars(:users="students" :name_filter="'Students'" :url_api="'/api/characters/students'")

    v-divider(dark class="my-4")

    //- CONTENT PROFESSORS
    v-container(fluid class="mb-16")
      v-container
        v-layout(justify-space-between)
          v-flex(auto)
            h1(class="title white--text text-h6 font-family-raleway-bold")= 'Professors'
          v-flex(xs12 class="d-flex justify-end")
            v-btn(:to="{name: 'filter', params: {name_filter: 'Professors', url_api: '/api/characters/staff'} }" color="secondary" class="white--text" small fab)
              v-icon(dark) arrow_forward
      v-container(pa-0)
        homeAvatars(:users="professors" :name_filter="'Professors'" :url_api="'/api/characters/staff'")
</template>

<script>

export default {
  name: 'Home',
  head: {
    title: 'Home'
  },
  loading: true,
  data: () => ({
    students: [],
    professors: [],
  }),
  methods: {
    async getStudents() {
      try {
        const _RES = await this.$axios.get('/api/characters/students')
        this.students = _RES.data
      }catch(error) {
        console.log(error)
      }
    },
    async getProfessors() {
      try {
        const _RES = await this.$axios.get('/api/characters/staff')
        this.professors = _RES.data
      }catch(error){
        console.log(error)
      }
    }
  },
  created() {
    this.getStudents()
    this.getProfessors()
  },

}
</script>

<style lang="scss" scoped>

.container--fluid {
  position: relative;
  z-index: 0;
}

.title {
  border-bottom: 3px solid var(--v-primary-base);
}
</style>
