import React, { useState, useEffect } from 'react'
import { observer } from 'startupjs'
import { View, Image } from 'react-native'
import { Divider } from 'components'
import { Span, Button } from '@startupjs/ui'
import './index.styl'

export default observer(function ImageSection ({ image, title, text }) {
  return pug`
     View.root
      View.imageWrapper
        Image.image(source={uri: image})
      View.content
        Span.title=title
        Divider
        Span.text=text
        Button() Learn more
  `
})
