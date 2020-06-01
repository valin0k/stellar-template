import React from 'react'
import { observer } from 'startupjs'
import { View, Image } from 'react-native'
import { Divider, LightButton, Text } from 'components'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

export default observer(function ImageSection ({ image, title, text }) {
  return pug`
    View.root
      View.imageWrapper
        Image.image(source={uri: BASE_URL + image})
      View.content
        Text(subtitle)=title
        View.dividerWrapper
          Divider
        View.textWrapper
          Text=text
        View.button
          LightButton
  `
})
