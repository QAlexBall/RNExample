import React, { Component } from 'react'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor,
  }
}

export const connect = (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    render () {
      const { store } = this.context
      let stateProps = mapStateToProps(store.getState())
      return <WrappedComponent {...stateProps} />
    }
  }
  return Connect
}
