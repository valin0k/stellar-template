import React from 'react'
import { observer } from 'startupjs'
import { Span } from '@startupjs/ui'
import './index.styl'

export default observer(function Text ({ white, subtitle, text, center, children }) {
  return pug`
    Span.text(styleName={white, subtitle, center})
      =children
  `
})
