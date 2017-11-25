export function fetchArticles(limit) {
  return {
    type: 'home-articles-fetch-request',
    limit
  }
}