import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from '../../Component/Article/Article'
import { View } from 'react-native'

export class ArticleContainer extends Component {
    static propTypes = {
        article: PropTypes.any,
        onGetArticle: PropTypes.func,
        onGetArticleAsync: PropTypes.func
    }

    render () {
        return (
            <View>
                <Article 
                    article={this.props.article} 
                    onGetArticle={this.props.getArticle}
                    onGetArticleAsync={this.props.getArticleAsync} />
            </View>
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
        getArticle: () => {
            dispatch({type: 'GET_ARTICLE'})
        },
        getArticleAsync: () => {
            dispatch({type: 'GET_ARTICLE_ASYNC'})
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ArticleContainer)
