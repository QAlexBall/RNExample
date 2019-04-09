import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'

class ArticleDetail extends Component {
    static propTypes = {
        article: PropTypes.any,
    }

    hanldeChangeArticleContent () {
        console.log('handleChangeArticleContent')
        if (this.props.changeArticleContent) {
            this.props.changeArticleContent()
        }
    }

    render () {
        console.log(this.props.article[0].title)
        return (
            <View>
                <Text> title: {this.props.article[0].title} </Text>
                <TextInput defaultValue={this.props.article[0].context}>
                </TextInput>
                <Button title='Change' onPress={this.hanldeChangeArticleContent.bind(this)}>
                </Button>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        article: state.article.articleList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeArticleContent: () => {
            console.log('changeArticle')
            dispatch({type: 'CHANGE_ARTICLE_CONTENT'})
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ArticleDetail)