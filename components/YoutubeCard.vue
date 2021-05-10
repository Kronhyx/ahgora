<template>
  <b-card class="shadow w-100" body-bg-variant="light" no-body>
    <b-card-header class="p-0 position-relative">
      <b-card-img-lazy :src="snippet.thumbnails.medium.url" :alt="snippet.title" top />
      <b-badge class="position-absolute" v-text="$moment.utc(duration.asMilliseconds()).format('mm:ss')" />
    </b-card-header>
    <b-card-body class="d-flex flex-column">
      <b-card-title title-tag="h5" v-text="snippet.channelTitle" />
      <b-card-text class="flex-fill" v-text="snippet.title" />
    </b-card-body>
    <b-card-footer>
      <b-btn variant="danger" block>
        Go to YouTube
      </b-btn>
    </b-card-footer>
  </b-card>
</template>

<script lang="ts">
import { youtube_v3 } from 'googleapis/build/src/apis/youtube/v3'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class YoutubeCard extends Vue {
  @Prop({ required: true, type: Object }) readonly video!: youtube_v3.Schema$Video

  get snippet () {
    return this.video.snippet
  }

  get details () {
    return this.video.contentDetails
  }

  get duration () {
    return this.$moment.duration(this.details?.duration)
  }
}
</script>

<style lang="scss" scoped>
.card {
  height: 400px !important;

  .badge {
    bottom: .5em;
    right: .5em;
  }
}
</style>
