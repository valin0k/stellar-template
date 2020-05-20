import React from 'react'
import { observer } from 'startupjs'
import { View } from 'react-native'
import { Span} from '@startupjs/ui'
import { Svg } from 'components'
import './index.styl'


export default observer(function TopBar ({ style }) {
  return pug`
     View.root
        View.icon
          Svg(width=85 height=85 uri='/logo.svg')
        Span.title Stellar
        Span.description Just another free, fully responsive site template built by @ajlkn for HTML5 UP.
  `
})
