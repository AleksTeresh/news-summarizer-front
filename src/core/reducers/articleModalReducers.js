function getInitialState() {
  return {
    title: null,
    contents: null,
    open: false
  }
}

export default function articleModalReducer (
  state = getInitialState(),
  action
) {
  switch (action.type) {
    case 'core-article-modal-open':
      return {
        ...state,
        title: action.title,
        contents: action.contents,
        open: true
      }
    case 'core-article-modal-close':
      return {
        ...state,
        open: false
      }
    default:
      return state
  }
}
