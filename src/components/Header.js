import PropTypes from 'prop-types'
import React from 'react'
import Subelement from './Subelement'
import avatar from '../assets/images/avatar.jpg'

import config from '../../config'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <div className="icon">
        <img src={avatar} className="logo"/>
      </div>
    </div>
    <div className="content">
      <div className="inner">
        <h1>{config.title}</h1>
        <pre>{config.subtitle}</pre>
      </div>
    </div>
    <nav>
      <ul>
        {config.social.map((element) => { return (<Subelement title={element.title} link={element.link}/>); })}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
