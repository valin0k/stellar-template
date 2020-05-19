import React from 'react'
import { observer, emit, useValue, useLocal } from 'startupjs'
import './index.styl'
import { Row, Div, Layout, SmartSidebar, Menu, Button, H1, Span } from '@startupjs/ui'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { displayName } from '../../app.json'

const APP_NAME = displayName.charAt(0).toUpperCase() + displayName.slice(1)

export default observer(function ({ children }) {
  return pug`
    Layout
      =children
  `
})
