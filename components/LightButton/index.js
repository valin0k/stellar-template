import React, { useState, useEffect } from 'react'
import { observer } from 'startupjs'
import { Button } from '@startupjs/ui'
import './index.styl'

const STYLE = {
  button: { padding: 20, paddingRight: 20, paddingLeft: 20, borderColor: '#e3e3e3' },
  text: { color: '#636363', fontWeight: 200, fontSize: 14}
}

export default observer(function ImageSection ({ text = 'Learn more' }) {
  return pug`
    Button(style=STYLE.button textStyle=STYLE.text)=text
  `
})
