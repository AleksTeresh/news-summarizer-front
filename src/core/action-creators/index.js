
export function fetchKeyWords (limit) {
  return {
    type: 'core-key-words-fetch-request',
    limit: limit
  }
}
