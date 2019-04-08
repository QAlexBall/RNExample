import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article';

export default class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.any,
    onGetArticle: PropTypes.func,
    onGetArticleAsync: PropTypes.func
  }

  static defaultProps = {
    articles: ['test', 'test1']
  }

  handleGetAricle () {
    if (this.props.onGetArticle) {
      this.props.onGetArticle()
    }  
  }

  handleGetAricleAsync () {
    if (this.props.onGetArticleAsync) {
      console.log('async article in component articlelist')
      this.props.onGetArticleAsync()
      console.log(this.props.articles)
    }
  }

  render() {
    console.log(this.props.articles)
    return (
      <div>
        <h1> ArticleList </h1>
        {this.props.articles.map((article, i) =>
            <Article
              article={article}
              key={i}
              index={i}
              onGetArticle={this.handleGetAricle.bind(this)}
              onGetArticleAsync={this.handleGetAricleAsync.bind(this)} />
        )}
      </div>
    )
  }
}