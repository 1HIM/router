import React from 'react'

const Footer = () => {
  return (
    <footer>
          <div className="logo-box">
            <p className="logo">
              multi<span>flex</span>
            </p>
            <p><i className="fa fa-copyright" /> 2001-2017, SIA Multiflex</p>
          </div>
          <ul>
            <li>main</li>
            <li>schedlues</li>
            <li>tickets</li>
            <li>news</li>
            <li>contact</li>
          </ul>
          <div className="socail-box">
            <i className="fa fa-facebook-f" />
            <i className="fa fa-twitter" />
            <i className="fa fa-instagram" />
          </div>
        </footer>
  )
}

export default Footer
