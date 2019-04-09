import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Proptypes from 'prop-types'

export default class Article extends Component {
    static propTypes = {
        article: Proptypes.any,
    }

    constructor () {
        super()
        this.state = { aritcle: ''}
    }

    handleArticleDetail () {
        if (this.props.onArticleDetail) {
            this.props.onArticleDetail()
        }
    }

    render () {
        return (
        <View>
            <View>
                <Text style={styles.textSize}>{ this.props.article.title }</Text>
            </View>
            <Button title="detail..." onPress={this.handleArticleDetail.bind(this)}>
            </Button>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    textSize : {
        fontSize: 32,
    },
})