export default interface IndeX {
  videos: unknown[]
  loading: boolean
}

export const state = (): Partial<IndeX> => ({
  videos: [],
  loading: false
})

export const mutations: any = {

  videos (state: IndeX, videos: unknown[]) {
    return (state.videos = videos)
  },

  loading (state: IndeX, loading: boolean) {
    return (state.loading = loading)
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
