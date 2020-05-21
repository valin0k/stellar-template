import React from 'react'
import { observer } from 'startupjs'
import { View } from 'react-native'
import './index.styl'

export default observer(function Block ({ children, withBorder }) {
  return pug`
    View.root
      =children
    if withBorder
      View.border
  `
})
