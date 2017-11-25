
export function fetchKeyWords (limit) {
  return {
    type: 'core-key-words-fetch-request',
    limit: limit
  }
}

export function selectKeyWord(keyWord) {
  return {
    type: 'core-keyword-select',
    keyWord
  }
}
