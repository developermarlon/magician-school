<template lang="pug">
  v-container(ma-0 pa-0)
    v-card(class="rounded-xl")
      v-img(:src="user.image" transition="scroll-x-reverse-transition" :max-height="$vuetify.breakpoint.xs ? 280 : $vuetify.breakpoint.sm ? 200 :  280")
        template(v-slot:placeholder)
              v-row(class="fill-height ma-0" align="center" justify="center")
                v-progress-circular(indeterminate color="grey lighten-5")
      v-card-title(class="font-family-raleway-bold text-left text-h6 primary--text")
        div {{user.name}}

      v-card-subtitle(class="font-family-raleway-medium text-left text-subtitle-1")
        div {{user.house}}

      v-card-text
        v-timeline(align-top dense class="ml-n7 mt-n3")

          v-timeline-item(color="secondary" small class="pb-2")
            div
              div(class="font-weight-normal")
                strong(class="font-family-raleway-medium") Species
              div(class="font-family-raleway-medium") {{ user.species }}

          v-timeline-item(color="secondary" small class="pb-2")
            div
              div(class="font-weight-normal")
                strong(class="font-family-raleway-medium") Gender
              div(class="font-family-raleway-medium") {{ user.gender }}

      v-card-actions
        v-dialog( max-width="600")
          template(v-slot:activator="{ on, attrs }")
            v-btn(color="primary" v-bind="attrs" :elevation="0" v-on="on" large rounded block class="font-family-raleway-medium text-body-1 text-capitalize")
              v-icon(class="mr-3" md) visibility
              div see more

          template(v-slot:default="dialog")
            v-card(class="rounded-xl")
              v-toolbar(color="primary font-family-raleway-bold text-h6" :elevation="0" dark) {{`Profile ${user.name}`}}
              v-card-text(class="pb-0")
                v-timeline(align-top dense class="ml-n7 mt-0")

                  v-timeline-item(color="secondary" small class="pb-4")
                    div
                      div(class="font-weight-normal")
                        strong(class="font-family-raleway-medium") Species
                      div(class="font-family-raleway-medium") {{ user.species }}

                  v-timeline-item(color="secondary" small class="pb-4")
                    div
                      div(class="font-weight-normal")
                        strong(class="font-family-raleway-medium") Gender
                      div(class="font-family-raleway-medium") {{ user.gender }}

                  v-timeline-item(color="secondary" small class="pb-4")
                    div
                      div(class="font-weight-normal")
                        strong(class="font-family-raleway-medium") House
                      div(class="font-family-raleway-medium") {{ user.house }}

                  v-timeline-item(color="secondary" small class="pb-4")
                    div
                      div(class="font-weight-normal")
                        strong(class="font-family-raleway-medium") Date of birth
                      div(class="font-family-raleway-medium") {{ user.dateOfBirth }}

                  v-timeline-item(color="secondary" small class="pb-4")
                    div
                      div(class="font-weight-normal")
                        strong(class="font-family-raleway-medium") Year of birth
                      div(class="font-family-raleway-medium") {{ user.yearOfBirth }}

                  v-timeline-item(color="secondary" small class="pb-4")
                    div
                      div(class="font-weight-normal")
                        strong(class="font-family-raleway-medium") Ancestry
                      div(class="font-family-raleway-medium") {{ user.ancestry }}

                  v-timeline-item(color="secondary" small class="pb-4")
                    div
                      div(class="font-weight-normal")
                        strong(class="font-family-raleway-medium") Eye colour
                      div(class="font-family-raleway-medium") {{ user.eyeColour }}

                  v-timeline-item(color="secondary" small class="pb-4")
                    div
                      div(class="font-weight-normal")
                        strong(class="font-family-raleway-medium") Hair colour
                      div(class="font-family-raleway-medium") {{ user.hairColour }}

              v-card-actions(class="justify-end px-2 pb-2 pt-0")
                v-btn(color="secondary" @click="dialog.value = false" :elevation="0" large rounded block class="font-family-raleway-medium text-body-1 text-capitalize")
                  v-icon(class="mr-3" md) close
                  div Close

</template>

<script>
export default {
  name: 'CartUser',
  props: {
    user: {
      type: Object,
      default: {

      },
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
