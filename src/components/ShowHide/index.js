import {Component} from 'react'
import './index.css'

export default class ShowHide extends Component {
  state = {
    first: false,
    last: false,
  }

  handleFirstName = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  handleLastName = () => {
    this.setState(prevState => ({last: !prevState.last}))
  }

  render() {
    const {first, last} = this.state
    return (
      <div className="main-container">
        <div>
          <h1>Show/Hide</h1>
        </div>
        <div className="show-container">
          <div className="container">
            <button onClick={this.handleFirstName} type="button">
              Show/Hide Firstname
            </button>
            {first && (
              <div className="empty-div">
                <p className="text">Joe</p>
              </div>
            )}
          </div>
          <div className="container">
            <button onClick={this.handleLastName} type="button">
              Show/Hide Lastname
            </button>
            {last && (
              <div className="empty-div">
                <p className="text">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
