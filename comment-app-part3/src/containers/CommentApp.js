import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import Counter from '../components/Counter'
import Article from './Article'
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
        <Article  />
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