import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ArticleList from '../../components/Article/ArticleList'
import { getArticleList } from '../../reducers/article'

class ArticleListContainer extends Component {
  static propTypes = {
    articles: PropTypes.any,
    onLoadArticles: PropTypes.func,
    onGetArticle: PropTypes.func,
    onGetArticleAsync: PropTypes.func
  }

  componentWillMount () {
      this.props.getArticleAsync()
  }

  handleLoadArticle () {
    this.props.getArticleAsync()
  }

  handleGetAritlce () {
    this.props.getArticle()
  }

  handleGetAritlceAsync () {
    this.props.getArticleAsync()
  }

  render () {
    return (
      <ArticleList
        articles={this.props.articles}
        onLoadArticles={this.handleLoadArticle.bind(this)}
        onGetArticle={this.handleGetAritlce.bind(this)}
        onGetArticleAsync={this.handleGetAritlceAsync.bind(this)} />
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.article)
  return {
    articles: state.article.article
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticleList: (articles) => {
      dispatch(getArticleList(articles))
    },
    getArticle: () => {
      console.log('getArticle')
      dispatch({type: 'GET_ARTICLE'})
    },
    getArticleAsync: () => {
      dispatch({type: 'GET_ARTICLE_ASYNC'})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleListContainer)