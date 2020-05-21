import React from 'react'
import { observer } from 'startupjs'
import { View, Image } from 'react-native'
import { BASE_URL } from 'clientHelpers'
import { Text, LightButton } from 'components'
import { Div, Span } from '@startupjs/ui'
import './index.styl'

export default observer(function Footer ({ icons }) {
  return pug`
    View.root
      View.left
        Text(subtitle white) Aliquam sed mauris
        Text(white) Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.
        View.buttonWrapper
          LightButton(white)
      View.right
        View.rightTitle
          Text(subtitle white) Etiam feugiat
        View.row
          View.label
            Text(white bold) Address
          Text(white) 1234 Somewhere Road • Nashville, TN 00000 • USA
        View.row
          View.label
            Text(white bold) Phone
          Text(white) (000) 000-0000 x 0000
        View.row
          View.label
            Text(white bold) Email
          Text(white) information@untitled.tld
      View.icons
        each icon in icons
          View.iconWrapper(key=icon)
            Image.icon(source={uri: BASE_URL + 'social' + icon})
      View.credits
        Text(white) © Untitled. Design: HTML5 UP. Demo Images: Unsplash.
  `
})
