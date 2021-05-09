<template>
  <div class="card">
    <a href="#">
      <img :src="image" alt="Image" class="card-img-top">
    </a>
    <div class="card-body d-flex flex-column">
      <div class="d-flex justify-content-between mb-3">
        <div class="text-small d-flex">
          <div class="mr-2">
            <a href="#">Finance</a>
          </div>
          <span class="text-muted">16th November</span>
        </div>
      </div>
      <a href="#">
        <h4>Planning for change</h4>
      </a>
      <p class="flex-grow-1">
        Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
      </p>
      <div class="d-flex align-items-center mt-3">
        <img src="https://leap.mediumra.re/assets/img/avatars/female-3.jpg" alt="Image" class="avatar avatar-sm">
        <div class="ml-1">
          <span class="text-small text-muted">By</span>
          <span class="text-small">Anne Souzakis</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({ })
export default class YoutubeCard extends Vue {
  @Prop({ required: true, type: Object }) readonly video!: any

  get image () {
    return `https://img.youtube.com/vi/${this.video.videoId}/0.jpg`
  }
}
</script>
