const mutations = {
  setWindowTop (state, windowTop) {
    state.windowTop = windowTop
  },
  setScrollWidth (state, scrollWidth) {
    state.scrollWidth = scrollWidth
    state.isMobile = scrollWidth < 992
  }
}

export default mutations
