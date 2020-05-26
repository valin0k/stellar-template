import React from 'react'
import { observer } from 'startupjs'
import { View, Image, TouchableOpacity } from 'react-native'
import { Text } from 'components'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

export default observer(function Menu () {
  return pug`
    View.root
      TouchableOpacity.menuItem(styleName={first: true})
        Text Introduction
      TouchableOpacity.menuItem
        Text First section
      TouchableOpacity.menuItem
        Text Second section
      TouchableOpacity.menuItem
        Text Get started 
  `
})
