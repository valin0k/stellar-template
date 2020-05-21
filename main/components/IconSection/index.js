import React from 'react'
import { observer } from 'startupjs'
import { View, Image } from 'react-native'
import { Divider, LightButton, Svg } from 'components'
import { Span, Button } from '@startupjs/ui'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

export default observer(function IconSection ({ items, title }) {
  return pug`
     View.root
      View.titleWrapper
        Span.title=title
        Divider
      View.content
        each item in items
          View.section(key=item.title)
            View.iconBorderWrapper
              View.iconWrapper
                Image.image(source={uri: BASE_URL + item.icon} width=60 height=60)
            Span.itemTitle=item.title
            Span.itemText=item.text
        LightButton
  `
})
