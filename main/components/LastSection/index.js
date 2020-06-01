import React from 'react'
import { observer } from 'startupjs'
import { View, Image, TouchableOpacity } from 'react-native'
import { Divider, LightButton, Text } from 'components'
import { Span } from '@startupjs/ui'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

export default observer(function LastSection ({ text, title }) {
  return pug`
     View.root
      Text(subtitle)=title
      View.dividerWrapper
        Divider
      View.textWrapper
        Text(center responsive)=text
      View.buttons
        TouchableOpacity.blueButton
          Span.buttonText Get started
        View.lightButton
          LightButton
  `
})
