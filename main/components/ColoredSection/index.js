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
          each item, i in icons
            - const first = !i
            - const last = i + 1 === icons.length
            View.section(key=item.title styleName={first, last})
              View.iconBorderWrapper(style={backgroundColor: item.background})
                View.iconWrapper
                  Image.image(source={uri: BASE_URL + item.icon})
                View.iconContent
                  Span.iconCount=item.count
                  Text(white)=item.text
        View.textItems
          each item, i in items
            - const first = !i
            Text=item
            View.textDivider(styleName={first})
      View
        LightButton
  `
})
