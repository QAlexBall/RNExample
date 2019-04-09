import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import { View, FlatList, Text, StyleSheet} from 'react-native'

export default class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.any,
        onArticleDetail: PropTypes.func
    }

    static defaultProps = {
        articles: ['test', 'test1']
    }
    
    handleGetArticleDetail () {
        if (this.props.onArticleDetail) {
            this.props.onArticleDetail()
        }
    }

    _renderItem = ({item}) => (
        <View>
            <Article 
                article={item}
                onArticleDetail={this.handleGetArticleDetail.bind(this)} />
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