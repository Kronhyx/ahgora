import { youtube_v3 } from 'googleapis/build/src/apis/youtube/v3'
import moment from 'moment'

export default interface IndeX {
  videos: youtube_v3.Schema$Video[]
  loading: boolean
  minutes: number
}

export const state = (): Partial<IndeX> => ({
  videos: [],
  loading: false,
  minutes: 0
})

export const mutations: any = {

  videos (state: IndeX, videos: youtube_v3.Schema$Video[]) {
    return (state.videos = videos)
  },

  loading (state: IndeX, loading: boolean) {
    return (state.loading = loading)
  },

  minutes (state: IndeX, min: number) {
    return (state.minutes = min)
  }
}

export const actions: any = {}

export const getters: any = {
  videos: ({ videos }: IndeX) => {
    return videos
  },
  isLoading: ({ loading }: IndeX) => {
    return loading
  },
  daysToWatch ({ videos }: IndeX) {
    const miliseconds = videos.reduce((accumulated, video) => {
      const duration = moment.duration(video.contentDetails?.duration).asMilliseconds()

      return duration + accumulated
    }, 0)

    return moment.duration(miliseconds, 'milliseconds')
  }
}
