import React, { Component } from 'react'
import { Button } from 'antd'
export default class Index extends Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState((prevState) => {
      console.log('prevState', prevState)
      return {
        count: prevState.count + 1
      }
    }, () => {
      console.log('state', this.state);
    })
  }


  render () {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>按钮</Button>
      </div>
    )
  }
}
