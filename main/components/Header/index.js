import React, { useState, useEffect } from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View } from 'react-native'
import { Div, Span, Button, Br, Row, Card, H1 } from '@startupjs/ui'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Svg } from 'components'

const BUTTON_STYLE = {
  button: { borderColor: '#575d69' },
  text: { color:  '#fff'},
  redButton: { borderColor: '#e7746f', backgroundColor: '#e7746f' }
}

export default observer(function TopBar ({ style }) {
  return pug`
     View.root
        View.icon
          Svg(width=85 height=85 uri='/logo.svg')
        Span.title Stellar
        Span.description Just another free, fully responsive site template built by @ajlkn for HTML5 UP.
  `
})
