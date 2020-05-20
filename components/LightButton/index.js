import React, { useState, useEffect } from 'react'
import { observer } from 'startupjs'
import { Div, Span } from '@startupjs/ui'
import './index.styl'

export default observer(function LightButton ({ text = 'Learn more' }) {
  return pug`
    Div.root
      Span.text=text
  `
})
