import React from 'react'
import { observer } from 'startupjs'
import { TouchableOpacity } from 'react-native'
import { Span } from '@startupjs/ui'
import './index.styl'

export default observer(function LightButton ({ text = 'Learn more', white }) {
  return pug`
    TouchableOpacity.root(styleName={white})
      Span.text(styleName={white})=text
  `
})
