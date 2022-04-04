import React from 'react'

class Count extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { count } = this.state
    return (
      <div>Count is <h1 onClick={this.handleClick}>{count}</h1> </div>
    )
  }
}

export default Count
