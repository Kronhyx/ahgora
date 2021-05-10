<template>
  <b-card class="rounded shadow hover-shadow-3d" no-body>
    <a href="#">
      <b-card-img-lazy :src="snippet.thumbnails.medium.url" :alt="snippet.title" top />
    </a>
    <b-card-body class="d-flex flex-column" body-class="bg-light">
      <div class="d-flex justify-content-between mb-3">
        <div class="text-small d-flex">
          <div class="mr-2">
            <a href="#">Finance</a>
          </div>
          <span class="text-muted">16th November</span>
        </div>
      </div>
      <a href="#">
        <span class="h6 font-weight-bold" v-text="snippet.title" />
      </a>
      <p class="flex-grow-1 overflow-hidden" v-text="snippet.description" />
      <div class="d-flex align-items-center mt-3">
        <img src="https://leap.mediumra.re/assets/img/avatars/female-3.jpg" alt="Image" class="avatar avatar-sm">
        <div class="ml-1">
          <span class="text-small text-muted">By</span>
          <span class="text-small" v-text="snippet.channelTitle" />
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script lang="ts">
import { youtube_v3 } from 'googleapis/build/src/apis/youtube/v3'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({ })
export default class YoutubeCard extends Vue {
  @Prop({ required: true, type: Object }) readonly video!: youtube_v3.Schema$Video

  get snippet () {
    return this.video.snippet
  }

  get details () {
    return this.video.contentDetails
  }
}
</script>

<style scoped>
.card {
  height: 510px !important;
}
</style>
