import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../../constants'

// seperate out into left and right panels

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <>
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <div className="fw7 mr1">
            <Link to="/" className="ml1 no-underline black">
             Home
            </Link>
          </div>

          <div className="ml1">|</div>
          <Link to="/forum" className="ml1 no-underline black">
            Forum
          </Link>
          <div className="ml1">|</div>
          <Link to="/photo" className="ml1 no-underline black">
            Photos
          </Link>
        </div>

        {/* // Login/SignUp */}
        <div className="flex flex-fixed">
          {authToken ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                this.props.history.push(`/`)
              }}
            >
              logout
            </div>
          ) : (
            <Link to="/login" className="ml1 no-underline black">
              login
            </Link>
          )}
        </div>
      </div>
      
      </>
    )
  }
}

export default withRouter(Header)