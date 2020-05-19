import React, { useState, useEffect } from 'react'
import {
  observer,
  useDoc,
  useApi
} from 'startupjs'
import './index.styl'
import { View } from 'react-native'
import { Div, Span, Button, Br, Row, Card } from '@startupjs/ui'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export default observer(function TopBar ({ style }) {
  return pug`
     View.root
      View.leftMenu
        Button Back
      View.rightMenu
  `
})
