<template>
  <section class="has-divider text-light overlay">
    <div class="h-100 position-absolute w-100 wallpaper" :style="{filter: `hue-rotate(${randomHue}deg)`}" />
    <b-container>
      <b-row align-h="center" class="flex-column">
        <b-col cols="12" class="text-center">
          <h1 class="display-4">
            Search videos
          </h1>
        </b-col>
        <b-col cols="12">
          <b-form class="w-75 mx-auto" @submit.prevent="search">
            <b-form-row>
              <b-input-group size="lg">
                <b-form-input v-model="searchTerm" placeholder="Search" class="h-100" :disabled="loading" />
                <template #append>
                  <b-btn variant="primary" type="submit" :disabled="loading">
                    <span v-show="!loading">OK</span>
                    <b-spinner v-show="loading" small />
                  </b-btn>
                </template>
              </b-input-group>
            </b-form-row>
          </b-form>
        </b-col>
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
import { Component, Getter, Vue } from 'nuxt-property-decorator'

@Component({ components: { TopDivider } })
export default class MainHead extends Vue {
  @Getter('isLoading') readonly loading!: boolean
  protected searchTerm: string = ''

  get randomHue () {
    return Math.floor(Math.random() * 360) + 1
  }

  fetch () {
    return this.search()
  }

  async search () {
    this.$store.commit('loading', true)
    const params = {
      safeSearch: 'none',
      maxResults: 50,
      q: this.searchTerm,
      key: this.$config.youtubeApi
    }

    const items:any[] = await this.$axios.get('/search', { params })
      .then(({ data }) => data.items)
      .catch(console.warn)

    const ids = items
      .filter(({ id }: any) => id.kind === 'youtube#video')
      .map(({ id }: any) => id.videoId)
      .join(',')

    const videoParams = {
      id: ids,
      part: 'snippet, contentDetails',
      key: this.$config.youtubeApi
    }

    return this.$axios.get('/videos', { params: videoParams })
      .then(({ data }) => this.$store.commit('videos', data.items))
      .catch(console.warn)
      .finally(() => (this.$store.commit('loading', false)))
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
  transition: 2s;
}
</style>
