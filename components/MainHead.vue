<template>
  <section class="has-divider text-light overlay">
    <div class="h-100 position-absolute w-100 wallpaper" :style="{filter: `hue-rotate(${randomHue}deg)`}" />
    <b-container>
      <b-row>
        <div class="col-xl-5 col-lg-6 col-md-8">
          <h1 class="display-4">
            Blog
          </h1>
          <p class="lead mb-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
          </p>
        </div>
      </b-row>
    </b-container>
    <div class="divider">
      <TopDivider />
    </div>
  </section>
</template>

<script lang="ts">
// @ts-ignore
import TopDivider from '@/static/images/divider.svg?inline'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({ components: { TopDivider } })
export default class MainHead extends Vue {
  get randomHue () {
    return Math.floor(Math.random() * 360) + 1
  }
}
</script>

<style scoped>
.wallpaper {
  background-image: url('https://siteteste.ahgora.com/wp-content/uploads/2019/09/topo-home.jpg?id=83');
  background-position: 0 -10em;
  background-attachment: fixed;
  background-size: cover;
  z-index: inherit;
}
</style>
