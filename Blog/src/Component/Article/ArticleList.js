import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import { View, FlatList, Text, StyleSheet} from 'react-native'

export default class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.any,
        onGetArticleDetial: PropTypes.func
    }

    static defaultProps = {
        articles: ['test', 'test1']
    }
    
    handleGetArticleDetial () {
        if (this.props.onGetArticleDetial) {
            this.props.onGetArticleDetial()
        }
    }

    _renderItem = ({item}) => (
        <View>
            <Article 
                article={item}
                onGetArticleDetial={this.handleGetArticleDetial} />
        </View>
    )

    render () {
        return (
            <View sytle={styles.contanier}>
                <Text style={styles.contanier}>ArticleList</Text>
                <FlatList
                    data={this.props.articles}
                    renderItem={this._renderItem} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contanier: {
        paddingTop: 22
    },
    item: {
        padding: 110,
        fontSize: 10,
        height: 44,
    },
})