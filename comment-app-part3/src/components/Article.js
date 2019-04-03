import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Article extends Component {
  static propTypes = {
    article: PropTypes.any 
  }

  render () {
    return (
      <div className='article'>
        
        <div className='article-title'>
            <h1> title: { this.props.article } </h1>
        </div>
        
        <button onClick={this.props.onGetArticle.bind(this)}>
            get article
        </button>

        <button onClick={this.props.onGetArticleAsync.bind(this)}>
            get article async
        </button>

      </div>
    )
  }
}