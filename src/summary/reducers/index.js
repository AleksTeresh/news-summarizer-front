function getInitialState() {
  return {
    summary: null,
    emotions: null,
    tags: null
  }
}

export default function summaryReducer (
  state = getInitialState(),
  action
) {
  switch (action.type) {
    case 'summary-fetch-success':
      return {
        summary: action.summary,
        emotions: action.emotions,
        tags: action.tags
      }
    default:
      return state
  }
}

