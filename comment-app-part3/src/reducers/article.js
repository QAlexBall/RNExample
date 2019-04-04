const GET_ARTICLE = 'GET_ARTICLE'
const GET_ARTICLE_ASYNC = 'GET_ARTICLE_ASYNC'

export default function (state, action) {
  if (!state) {
    state = { article: ['hello'] }
  }

  switch (action.type) {
    case GET_ARTICLE:
      return { article: action.article }
    case GET_ARTICLE_ASYNC:
        return { article: 'please wait......'}
    default:
      return state
  }
}

export const getArticle = (article) => {
  return { type: GET_ARTICLE, article }
}