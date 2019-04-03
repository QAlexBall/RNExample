import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from '../components/Article'

export class ArticleContainer extends Component {
  static propsTypes = {
    article: PropTypes.any,
    onGetArticle: PropTypes.func,
    onGetArticleAsync: PropTypes.func
  }

  render () {
    return (
      <div>
        <Article 
          article={this.props.article}
          onGetArticle={this.props.getArticle.bind(this)}
          onGetArticleAsync={this.props.getArticleAsync.bind(this)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.article.article
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticle: (article) => {
      dispatch({type: 'GET_ARTICLE'})
    },
    getArticleAsync: (article) => {
      dispatch({type: 'GET_ARTICLE_ASYNC'})
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleContainer)