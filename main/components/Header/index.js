import React from 'react'
import { observer } from 'startupjs'
import { View, Image } from 'react-native'
import { Text } from 'components'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

export default observer(function TopBar ({ style }) {
  return pug`
    View.root
      View.icon
        Image.image(width=85 height=85 source={uri: BASE_URL + '/logo.png'})
      View.title
        Text(title white) Stellar
      View.text
        Text(white center responsive) Just another free, fully responsive site template built by @ajlkn for HTML5 UP.
  `
})
