export default interface IndeX {
  videos: unknown[]
  loading: boolean
  minutes: number
}

export const state = (): Partial<IndeX> => ({
  videos: [],
  loading: false,
  minutes: 0
})

export const mutations: any = {

  videos (state: IndeX, videos: unknown[]) {
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

export const getters = {
  videos: ({ videos }: IndeX) => {
    return videos
  },
  isLoading: ({ loading }: IndeX) => {
    return loading
  }
}
