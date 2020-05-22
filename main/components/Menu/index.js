import React from 'react'
import { observer } from 'startupjs'
import { View, Image } from 'react-native'
import { Text } from 'components'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

export default observer(function Menu () {
  return pug`
    View.root
      View.menuItem(styleName={selected: true})
        Text Introduction
      View.menuItem
        Text First section
      View.menuItem
        Text Second section
      View.menuItem
        Text Get started 
  `
})
