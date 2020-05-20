import React, { useState, useEffect } from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View } from 'react-native'
import { Div, Span, Button, Br, Row, Card } from '@startupjs/ui'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const BUTTON_STYLE = {
  button: { borderColor: '#575d69' },
  text: { color:  '#fff'},
  redButton: { borderColor: '#e7746f', backgroundColor: '#e7746f' }
}

export default observer(function TopBar ({ style }) {
  return pug`
     View.root
      View.leftMenu
        Button(style=BUTTON_STYLE.button textStyle=BUTTON_STYLE.text) Back
      View.rightMenu
        Button(style=BUTTON_STYLE.redButton textStyle=BUTTON_STYLE.text) Download
          Span.redButtonText  (150,679)
  `
})
