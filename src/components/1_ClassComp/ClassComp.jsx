import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ClassComp extends Component {
  //   constructor() {
  //     super()
  //     this.state = {
  //       value: 0,
  //       isOpen: false,
  //     }
  //     this.handleIncrement = this.handleIncrement.bind(this)
  //     this.handleDecrement = this.handleDecrement.bind(this)
  //   }

  // Default props
  static defaultProps = {
    initialValue: 0,
    step: 5,
  }

  state = {
    value: this.props.initialValue,
    isOpen: false,
  }

  show = () => this.setState({ isOpen: true })

  hide = () => this.setState({ isOpen: false })

  handleIncrement = (evt) => {
    this.setState((prevState, props) => ({
      value: prevState.value + props.step,
    }))
  }

  handleDecrement = (evt) => {
    this.setState((prevState, props) => ({
      value: prevState.value - props.step,
    }))
  }
  render() {
    const { step, children } = this.props
    const { isOpen, value } = this.state

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
        <p>{value}</p>

        <div>
          <button onClick={this.show}>Show</button>
          <button onClick={this.hide}>Hide</button>
          {isOpen && children}
        </div>
      </div>
    )
  }
}

export default ClassComp
