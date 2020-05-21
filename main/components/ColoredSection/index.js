import React from 'react'
import { observer } from 'startupjs'
import { View, Image } from 'react-native'
import { Divider, LightButton, Text } from 'components'
import { Span, Button } from '@startupjs/ui'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

export default observer(function IconSection ({ items, title, text, icons }) {
  return pug`
     View.root
      View.titleWrapper
        Text(subtitle)=title
        Divider
        Text(center)=text
      View.content
        View.sections
          each item in icons
            View.section(key=item.title)
              View.iconBorderWrapper(style={backgroundColor: item.background})
                View.iconWrapper
                  Image.image(source={uri: BASE_URL + item.icon})
                View.iconContent
                  Span.iconCount=item.count
                  Text(white)=item.text
        each item in items
          Text=item
      View
        LightButton
  `
})
