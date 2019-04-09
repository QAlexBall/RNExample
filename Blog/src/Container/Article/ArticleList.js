import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ArticleList from '../../Component/Article/ArticleList'
import ArticleDetail from './ArticleDetail'

class ArticlListContainer extends Component {
    static propTypes = {
        articles: PropTypes.any,
        article: PropTypes.any,
        status: PropTypes.any,
        onArticleDetail: PropTypes.func,
    }

    componentWillMount () {
        this.props.getArticleAsync()
    }

    handleArticleDetail () {
        if (this.props.getArticleDetail) {
            this.props.getArticleDetail()
        }
    }

    render () {
        if (this.props.status == 'load article detail...') {
            return (
                <ArticleDetail
                    article={this.props.articles} />
            )
        } 
        else {
            return (
                <ArticleList 
                    articles={this.props.articles}
                    onArticleDetail={this.handleArticleDetail.bind(this)} />
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.article.articleList,
        status: state.article.status,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticleAsync: () => {
            dispatch({type: 'GET_ARTICLE_ASYNC'})
        },
        getArticleDetail: () => {
            dispatch({type: 'GET_ARTICLE_DETAIL'})
        },
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ArticlListContainer)