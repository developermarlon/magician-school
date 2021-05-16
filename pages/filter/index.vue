<template lang="pug">

    //- GENERAL CONTAINER
    v-container(pa-4 mt-16)

      //- ACTION BACK AND TITLE
      v-layout(justify-space-between align-center)
        v-flex(xs12)
          v-btn(
            @click="$router.go(-1)"
            color="secondary"
            class="white--text"
            small
            fab)
            v-icon(dark) arrow_back
        v-flex(auto)
          h1(class="title white--text text-right text-no-wrap text-h5 text-sm-h4 font-family-raleway-medium text-capitalize") {{name_filter}}

      //- LABEL SEARCH
      h1(class="d-flex white--text text-body-1 ml-3 font-family-raleway-bold mt-5")
        v-flex
          div(class="d-flex")
            div(class="mr-2") Search
            div(class="text-lowercase") {{name_filter}}
        v-flex(xs12 ml-2)
          v-icon(dark small) search

      //- SEARCH AUTOCOMPLETE
      v-autocomplete(
        v-model="selected"
        :items="users"
        filled
        rounded
        chips
        color="primary"
        background-color="white"
        small-chips
        hide-no-data
        hide-details
        hint
        single-line
        item-text="name"
        item-value="name"
        :loading="isLoading"
        :search-input.sync="search"
        :label="selected.length === 0 ? 'Enter the name' : ''"
        placeholder="Enter the name"
        return-object
        class="font-family-raleway-medium pl-0"
        multiple
        :autofocus="autofocus"
        @change="search = null"
        )

        //- CHIPS INPUT
        template(v-slot:selection="data")
          v-chip(
            v-bind="data.attrs"
            :input-value="data.selected"
            :disabled="data.disabled"
            close
            @click="data.select"
            @click:close="data.parent.selectItem(data.item)")
            v-avatar(
              left)
              v-img(:src="data.item.image")
            div(class="font-family-raleway-bold dark-1--text") {{data.item.name}}

        //- LIST AUTOCOMPLETE
        template(v-slot:item="data")
          v-list( class="flat rounded pt-0 pb-0")
            v-list-item(class="pl-0" active-class="pink--text")
              v-list-item-avatar
                v-avatar(
                  left
                  size="40")
                  v-img(:src="data.item.image")
              v-list-item-title(class="pa-0")
                v-list-item-title(class="font-family-raleway-bold dark-1--text") {{ data.item.name }}
                v-list-item-subtitle(class="font-family-raleway-medium text-caption") {{ data.item.house }}

      //- SHOW USERS FIND
      v-btn(:loading="loader_button" :disabled="loader_button" @click="addFindUsers" color="primary" class="mt-3 font-family-raleway-medium text-h6 text-capitalize" dark block x-large rounded)
        v-icon(dark class="mr-1" md) search
        div(class="text-body-1 text-sm-h6") search selected

      v-layout(mt-2 justify-center align-start wrap pa-0)
        //- CONFIG SIZE CART
        v-flex(class="xs12 sm3 md4 lg3 xl2 mx-0 my-3 ma-sm-3 ma-md-5" v-for="(user, idx) in usersFind" :key="idx")
          filterCartUser(:user="user")
</template>

<script>
export default {
  name: 'FilterUsers',
  head: {
    title: 'Filter users'
  },
  components: {
  },
  data: () => ({
    users: [],
    selected: [],
    users_find: [],
    isLoading: false,
    search: null,
    loader_button: false,
    autofocus: true,
    name_filter: null,
    url_api: null,
  }),
  watch: {
    'selected': function (newVal, oldVal){}
  },
  async created() {
    if(!this.$route.params.name_filter || !this.$route.params.url_api) this.$router.push({path: '/'})
    this.url_api = this.$route.params.url_api
    this.name_filter = this.$route.params.name_filter
    if(this.$route.params.filter_user) this.addFilterByRouter()
  },
  methods: {
    async getUsers() {
      if (this.users.length > 0) return;
      if (this.isLoading) return;
      this.isLoading = true;
      try {
        const _RES = await this.$axios.get(this.url_api, {progress: true})
        this.users = _RES.data
        this.isLoading = false
      }catch(err) {
        console.log(err)
      }
    },
    async addFilterByRouter() {
      this.autofocus = false
      try {
        await this.getUsers()
      }catch(error) {
        console.log(error)
      }
      this.selected.push(this.$route.params.user)
      this.addFindUsers()
    },
    addFindUsers() {
      this.loader_button = true
      setTimeout(() => {
        this.loader_button = false
        this.users_find = this.selected
      }, 500)
    }
  },
  computed: {
    usersFind() {
      return this.users_find.reverse()
    }
  },
  watch: {
    search() {
      this.getUsers()
    },
  },
}
</script>
<style lang="scss">
  .v-autocomplete__content {
    border-radius: 30px !important;
    &::-webkit-scrollbar {
      width: 0px;
    }
    &::-webkit-scrollbar-thumb {
      background: transparent;
    }
  }
  .v-select-list {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
</style>
<style lang="scss" scoped>
  .v-list-item__content {
    font-family: 'raleway medium';
  }

  .title {
    border-bottom: 3px solid var(--v-primary-base);
  }
</style>
