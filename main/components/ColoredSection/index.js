import React from 'react'
import { observer } from 'startupjs'
import { View, Image } from 'react-native'
import { Divider, LightButton, Svg } from 'components'
import { Span, Button } from '@startupjs/ui'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

export default observer(function IconSection ({ items, title, text, icons }) {
  return pug`
     View.root
      View.titleWrapper
        Span.title=title
        Divider
        Span.text=text
      View.content
        View.sections
          each item in icons
            View.section(key=item.title)
              View.iconBorderWrapper(style={backgroundColor: item.background})
                View.iconWrapper
                  Image.image(source={uri: BASE_URL + item.icon} width=60 height=60)
                View.iconContent
                  Span.iconCount=item.count
                  Span.iconText=item.text
        each item in items
          Span.itemText=item
      View
        LightButton
  `
})
