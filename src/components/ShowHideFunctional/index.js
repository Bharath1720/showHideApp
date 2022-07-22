import {useState} from 'react'
import './index.css'

const ShowHideFunctional = () => {
  const [first, setFirst] = useState(false)
  const [last, setLast] = useState(false)

  const handleFirstName = () => {
    setFirst(!first)
  }

  const handleLastName = () => {
    setLast(!last)
  }

  return (
    <div className="main-container">
      <div>
        <h1>Show/Hide</h1>
      </div>
      <div className="show-container">
        <div className="container">
          <button onClick={handleFirstName} type="button">
            Show/Hide Firstname
          </button>
          {first && (
            <div className="empty-div">
              <p className="text">Joe</p>
            </div>
          )}
        </div>
        <div className="container">
          <button onClick={handleLastName} type="button">
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

export default ShowHideFunctional
