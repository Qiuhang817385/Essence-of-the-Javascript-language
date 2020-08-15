import React, { Component } from 'react'
export default class Home extends Component {
  state = {
    count: 0
  }
  componentWillMount () {
  }
  componentDidMount () {
    console.log('cdm')
  }
  componentWillUpdate () {
    console.log('cwu')
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('cdu');
  }
  render () {
    console.log(this.state);
    return (
      <div>
        {this.state.count}
      </div>
    )
  }
}
