import React, { useState, useEffect } from 'react'
import { observer } from 'startupjs'
import { View, Image } from 'react-native'
import { Span } from '@startupjs/ui'
import './index.styl'

export default observer(function ImageSection ({ image, title, text }) {
  return pug`
    View.root
      View.orange
      View.violet
      View.blue
  `
})
