'use strict'

export function editSearch (value) {
  return {
    type: 'search-search-edit',
    value: value
  }
}

export function removeTag(tagIdx) {
  return {
    type: 'search-tag-remove',
    tagIdx: tagIdx
  }
}

export function addTag(suggestionIdx) {
  return {
    type: 'search-tag-add',
    suggestionIdx: suggestionIdx
  }
}

export function fetchArticles (limit, keyWords, categories) {
  return {
    type: 'search-articles-fetch-request',
    limit: limit,
    keyWords: keyWords,
    categories: categories
  }
}

export function clearTags() {
  return {
    type: 'search-tags-clear'
  }
}
