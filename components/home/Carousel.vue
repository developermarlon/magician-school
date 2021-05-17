<template lang="pug">
  //- GENERAL CONTAINER WIDTH 100%
  v-container(fluid pa-0 id="container-banner")
    v-carousel(hide-delimiters :show-arrows="true" :height="$vuetify.breakpoint.xs ? '70vh' : '75vh'" cycle :interval="8000")

      //- PERSONALIZED ARROWS
      template(v-slot:prev="{ on, attrs }")
        v-btn(color="transparent" v-bind="attrs" v-on="on" fab small)
          v-icon chevron_left
      template(v-slot:next="{ on, attrs }")
        v-btn(color="transparent" v-bind="attrs" v-on="on" fab small)
          v-icon chevron_right

      //- INTERACTIVE ITEM
      v-carousel-item(v-for="(item,i) in items" :key="i" :src="processImage(item.img).url" :lazy-src="processImage(item.img).url_lazy" reverse-transition="fade-transition" eager)

        //- CONTENT ITEM
        v-container(fill-height pa-0)
          v-layout(flex-column align-center justify-center fill-height)
            p(class="text-center white--text text-h3 text-sm-h1 font-family-raleway-extrabold") {{item.title}}
            p(class="text-center text-description pl-2 pr-2 light-3--text text-h6 font-family-raleway-medium") {{item.description}}
            v-container(pa-0)
              v-layout(justify-center)

                //- MENU OPTIONS LINK
                v-menu(transition="slide-y-reverse-transition" :rounded="'lg'" open-on-hover :close-on-content-click="false" offset-y center)
                  template(v-slot:activator="{ on, attrs }")

                    v-btn(v-on="on" v-bind="attrs" rounded x-large dark color="primary" class="font-family-raleway-medium text-capitalize text-h6 elevation-10 mr-2")
                      v-icon(class="mr-2 ml-n2" medium) search
                      div(class="text-body-1 text-sm-h6") Search

                  //- LIST OPTIONS
                  v-list(class="pa-0")
                    div(v-for="(link, b) in links_search" :key="b")
                      v-divider(v-if="b !== 0")
                      v-list-item(link pa-0)
                        v-list-item-title(class="dark-2--text")
                          v-btn(color="transparent"
                            class="text-capitalize font-weight-bold dark-3--text ma-0 font-family-raleway-medium"
                            block
                            :to="{ name: link.name, params: {name_filter: link.name_filter, url_api: link.url_api} }") {{ link.text }}
            #shadow-bottom
            //- #shadow-top
</template>

<script>
export default {
  name: 'Carousel',
  data: () => ({
      links_search: [
        {
          name: 'filter',
          name_filter: 'Students',
          url_api: '/api/characters/students',
          text: 'Search Students'
        },
        {
          name: 'filter',
          name_filter: 'Professors',
          url_api: '/api/characters/staff',
          text: 'Search Professors'
        }
      ],
      url_provider: 'https://res.cloudinary.com/https-cat-tech-com-co/image/upload',
      items: [
        {
          img: 'v1621071762/magician-school/carousel/81g0GIoT8lL._AC__gsueoj.webp',
          title: 'Griffindor',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quis dignissimos necessitatibus architecto porro similique explicabo consectetur qui, odio'
        },
        {
          img: 'v1621077525/magician-school/carousel/Slytherin-Harry-Potter_cygbjc.webp',
          title: 'Slytherin',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quis dignissimos necessitatibus architecto porro similique explicabo consectetur qui, odio'
        },
        {
          img: 'v1621078042/magician-school/carousel/harry_potter_luna_lovegood_hero_01_ofpgyu.webp',
          title: 'Ravenclaw',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quis dignissimos necessitatibus architecto porro similique explicabo consectetur qui, odio'
        },
        {
          img: 'v1621078603/magician-school/carousel/harry-potter-gryffindor-hufflepuff-ravenclaw-wallpaper-preview_kun4ni.webp',
          title: 'Hufflepuff',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quis dignissimos necessitatibus architecto porro similique explicabo consectetur qui, odio'
        },
      ],
  }),
  methods: {
    processImage(img) {
      return {
        url: this.url_provider+'/c_scale,q_auto,e_sharpen,dpr_2.0/'+img,
        url_lazy: this.url_provider+'/c_scale,q_auto:low/'+img
      }
    }
  },
}
</script>

<style lang="scss">
  div.v-carousel__item {
    & > div.v-image__image {
      filter: brightness(0.5);
    }
  }
</style>

<style lang="scss" scoped>
  div#container-banner {
    position: relative;
    z-index: 0;
  }

  @mixin shadow {
    position:  absolute;
    left: 0px;
    z-index: -1;
    width: 100%;
  }

  div#shadow-bottom {
    bottom: -5px;
    box-shadow:
    0px 0px 100px 120px var(--v-background-base),
    0px 0px 10px 10px  var(--v-background-base);
    @include shadow
  }

  div#shadow-top {
    top: 0px;
    box-shadow:
    0px 0px 70px 90px var(--v-background-base),
    0px 0px 10px 10px  var(--v-background-base);
    @include shadow
  }

  .text-description {
    @include multiline(3);
  }

  @media (max-width: 400px) {
    div#shadow-top {
      box-shadow:
      0px 0px 30px 40px  var(--v-background-base),
      0px 0px 20px 10px  var(--v-background-base),
      0px 0px 10px 5px  var(--v-background-base);
    }
    div#shadow-bottom {
      box-shadow:
      0px 0px 60px 70px  var(--v-background-base),
      0px 0px 10px 10px  var(--v-background-base);
    }
  }
</style>
