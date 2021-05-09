export default interface IndeX {
  videos: unknown[]
}

export const state = (): Partial<IndeX> => ({
  videos: []
})

export const mutations: any = {

  videos (state: IndeX, videos: unknown[]) {
    return (state.videos = videos)
  }
}

export const actions: any = {}

export const getters = {
  videos: ({ videos }: IndeX) => {
    return videos
  }
}
