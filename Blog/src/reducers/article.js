const GET_ARTICLE_LIST = 'GET_ARTICLE_LIST'
const GET_ARTICLE = 'GET_ARTICLE'
const GET_ARTICLE_ASYNC = 'GET_ARTICLE_ASYNC'
const GET_ARTICLE_DETAIL = 'GET_ARTICLE_DETAIL'
const GET_ARTICLE_DETAIL_BY_INDEX = 'GET_ARTICLE_DETAIL_BY_INDEX'
const CHANGE_ARTICLE_CONTENT = 'GET_ARTICLE_CONTENT'

// status
const NOTHING = 'nothing'
const LOAD_ARTICLE_LIST = 'load article list...'
const LOAD_ARTICLE = 'load article detail...'


export default function (state, action) {
    if (!state) {
      state = { 
          articleList: ['hello', 'hello1'], 
          article: '', 
          status: NOTHING,
        }
    }

    switch (action.type) {
        case GET_ARTICLE_LIST:
            return { articleList: action.articleList }
        case GET_ARTICLE:
            return { articleList: action.articleList }
        case GET_ARTICLE_ASYNC:
            return { status: [LOAD_ARTICLE_LIST]}
        case GET_ARTICLE_DETAIL:
            return { ...state, status: LOAD_ARTICLE}
        case GET_ARTICLE_DETAIL_BY_INDEX:
            return { ...state }
        case CHANGE_ARTICLE_CONTENT:
            return { ...state, articleList: action.articleList}
        default:
          return state
    }
}

export const getArticle = (article) => {
    return { type: GET_ARTICLE, article }
}

export const getArticleList = (article) => {
    return { type: GET_ARTICLE_LIST, article}
}

export const getArticleDetail = (article) => {
    return { type: GET_ARTICLE_DETAIL, article }
}