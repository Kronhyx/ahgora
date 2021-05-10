<template>
  <div>
    <MainHead />
    <section>
      <b-container>
        <b-row class="mb-4">
          <template v-if="loading">
            <b-col v-for="skeleton in 9" :key="skeleton" md="6" lg="4" class="d-flex">
              <b-card class="w-100" no-body img-top>
                <b-skeleton-img />
                <b-card-body>
                  <b-skeleton width="20%" />
                  <hr>
                  <b-skeleton width="55%" />
                  <br>
                  <b-skeleton width="85%" />
                  <b-skeleton width="70%" />
                  <hr>
                  <b-skeleton type="avatar" />
                </b-card-body>
              </b-card>
            </b-col>
          </template>
          <b-col v-for="video in videos" :key="video.etag" md="6" lg="4" class="d-flex">
            <YoutubeCard :video="video" />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script lang="ts">
import MainHead from '@/components/MainHead.vue'
import { Component, Getter, Vue } from 'nuxt-property-decorator'
import { MetaInfo } from 'vue-meta'
import YoutubeCard from '~/components/YoutubeCard.vue'

@Component({ components: { YoutubeCard, MainHead } })
export default class IndexPage extends Vue {
  @Getter('videos') readonly videos!: any[]
  @Getter('isLoading') readonly loading!: boolean

  head (): MetaInfo {
    return {
      title: 'Videos'
    }
  }
}
</script>
