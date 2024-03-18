import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitchConnect from '../containers/ThemeSwitch'

export default class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js 小书内容(Content)</p>
        <ThemeSwitchConnect />
      </div>
    )
  }
}

