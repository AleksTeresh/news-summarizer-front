import { List } from 'immutable'

export function fromPlain (article) {
  return {
    ...article,
    keyWords: List(article.keyWords)
  }
}

export function toPlain (article) {
  return {
    ...article,
    keyWords: article.keyWords.toArray()
  }
}
