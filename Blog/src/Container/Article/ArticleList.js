import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ArticleList from '../../Component/Article/ArticleList'
import { View, Button } from 'react-native'
class ArticlListContainer extends Component {
    static propTypes = {
        articles: PropTypes.any,
        onArticleDetail: PropTypes.func,
    }

    componentWillMount () {
        this.props.getArticleAsync()
    }

    render () {
        return (
            <ArticleList 
                articles={this.props.articles}
                onArticleDetail={this.props.getArticleDetail} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.article.article
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