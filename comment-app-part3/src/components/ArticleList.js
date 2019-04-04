import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article';

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array
  }

  static defaultProps = {
    articles: []
  }

  render() {
    return (
      <div>
        {this.props.articles.map((article, i) =>
            <Article
              article={article}
              key={i}
              index={i} />
        )}
      </div>
    )
  }
}