import React from 'react'
import { observer } from 'startupjs'
import { View, Image } from 'react-native'
import { Divider, LightButton, Svg } from 'components'
import { Span, Button } from '@startupjs/ui'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

export default observer(function IconSection ({ text, title }) {
  return pug`
     View.root
      Span.title=title
      Divider
      Span.text=text
      View.buttons
        Button Get started
        LightButton
  `
})
