
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

export function openArticleModal(contents, title) {
  return {
    type: 'core-article-modal-open',
    contents,
    title
  }
}

export function closeArticalModal() {
  return {
    type: 'core-article-modal-close'
  }
}
