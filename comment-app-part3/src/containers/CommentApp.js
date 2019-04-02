import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import Counter from '../components/Counter'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export default class CommentApp extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onIncrementAsync: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className='wrapper'>
        <Counter 
          value={this.props.value}
          onIncrement={ this.props.increment.bind(this) }
          onDecrement={ this.props.decrement.bind(this) } />,
        <CommentInput />
        <CommentList />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch('INCREMENT')
    },
    decrement: () => {
      dispatch('DECREMENT')
    }
  }
}

CommentApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentApp)