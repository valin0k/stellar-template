import React from 'react'
import { observer } from 'startupjs'
import { View, Image } from 'react-native'
import { Divider, LightButton, Text } from 'components'
import { Span } from '@startupjs/ui'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

export default observer(function ColoredSection ({ description, title, text, icons }) {
  return pug`
     View.root
      View.titleWrapper
        Text(subtitle)=title
        View.dividerWrapper
          Divider
        View.textWrapper
          Text(center responsive)=text
      View.content
        View.sections
          each item, i in icons
            View.section(key=item.icon styleName={first: !i, last: i + 1 === icons.length})
              View.iconBorderWrapper(style={backgroundColor: item.background})
                View.iconWrapper
                  Image.image(source={uri: BASE_URL + item.icon})
                View.iconContent
                  Span.iconCount=item.count
                  Text(white)=item.text
        View.textItems
          Text(justify columns)=description
      View.button
        LightButton
  `
})
