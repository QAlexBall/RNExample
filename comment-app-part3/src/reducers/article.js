const GET_ARTICLE = 'GET_ARTICLE'

export default function (state, action) {
  if (!state) {
    state = { article: ['hello'] }
  }

  switch (action.type) {
    case GET_ARTICLE:
      console.log(state)
      return { article: action.article }
    default:
      return state
  }
}

export const getArticle = (article) => {
  return { type: GET_ARTICLE, article }
}