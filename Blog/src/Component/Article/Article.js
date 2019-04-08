import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Proptypes from 'prop-types'

export default class Article extends Component {
    static propTypes = {
        article: Proptypes.any
    }

    constructor () {
        super()
        this.state = { aritcle: ''}
    }

    render () {
        return (
        <View>
            <View>
                <Text style={styles.textSize}>title: { this.props.article }</Text>
            </View>
            <Button title="detail..." onPress={this.props.onGetArticleDetail}>
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