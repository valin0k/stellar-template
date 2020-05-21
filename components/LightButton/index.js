import React from 'react'
import { observer } from 'startupjs'
import { Div, Span } from '@startupjs/ui'
import './index.styl'

export default observer(function LightButton ({ text = 'Learn more', white }) {
  return pug`
    Div.root(styleName={white})
      Span.text(styleName={white})=text
  `
})
