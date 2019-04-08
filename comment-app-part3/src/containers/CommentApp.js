import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentInput from './Comment/CommentInput'
import CommentList from './Comment/CommentList'
import Counter from '../components/Counter/Counter'
import ArticleList from './Article/ArticleList'
import { connect } from 'react-redux'

export default class CommentApp extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className='wrapper'>
        <Counter 
          value={this.props.value}
          onIncrement={ this.props.increment.bind(this) }
          onDecrement={ this.props.decrement.bind(this) }
          onIncrementAsync={this.props.incrementAsync.bind(this)} />
        <ArticleList />
        {/* <Article  /> */}
        <CommentInput />
        <CommentList />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: 'INCREMENT' })
    },
    decrement: () => {
      dispatch({ type: 'DECREMENT' })
    },
    incrementAsync: () => {
      dispatch({ type: 'INCREMENT_ASYNC'})
    }
  }
}

CommentApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentApp)