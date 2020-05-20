import React from 'react'
import { observer } from 'startupjs'
import { ScrollView, View } from 'react-native'
import {
  TopBar,
  Header,
  Block,
  ImageSection
} from 'main/components'
import { imageSection } from 'main/data'
import './index.styl'
// import { Content } from '@startupjs/ui'

export default observer(function PHome () {
  return pug`
    TopBar
    ScrollView.root
      View.container
        Header
        View.content
          Block
            ImageSection(
              image=imageSection.image
              title=imageSection.title
              text=imageSection.text
            )
          
  `
})
