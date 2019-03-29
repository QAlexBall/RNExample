import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Clock extends Component {
  constructor () {
    super()
    this.state = {
      data: new Date()
    }
  }

  componentWillMount () {
    this.timer = setInterval(() => {
      this.setState({data: new Date() })
    }, 1000)
  }
  
  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div>
        <h1>
          <p> now </p>
          {this.state.data.toLocaleTimeString()}
        </h1>
      </div>
    )
  }
}

class AutoFocusInput extends Component {
  componentDidMount () {
    this.input.focus()
  }

  render () {
    return (
      <input ref={(input) => this.input = input} />
    )
  }
}

class Index extends Component {
  constructor () {
    super()
    this.state = { isShowClock: true }
  }

  handleShowOrHide () {
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }

  render () {
    return (
      <div>
        {this.state.isShowClock ? <Clock /> : null}
        <button onClick={this.handleShowOrHide.bind(this)}>
          show or hide
        </button>
        <AutoFocusInput />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)
