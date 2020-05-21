import React from 'react'
import { observer } from 'startupjs'
import { ScrollView, View } from 'react-native'
import {
  TopBar,
  Header,
  Block,
  ImageSection,
  IconSection,
  ColoredSection,
  LastSection
} from 'main/components'
import { imageSection, iconSection, coloredSection, lastSection } from 'main/data'
import './index.styl'
// import { Content } from '@startupjs/ui'

export default observer(function PHome () {
  return pug`
    TopBar
    View.background
      ScrollView.root
        View.container
          Header
          View.content
            Block(withBorder)
              ImageSection(
                image=imageSection.image
                title=imageSection.title
                text=imageSection.text
              )
            Block(withBorder)
              IconSection(
                items=iconSection
                title='Magna veroeros'
              )
            Block(withBorder)
              ColoredSection(
                items=coloredSection.items
                title=coloredSection.title
                text=coloredSection.text
                icons=coloredSection.icons
              )
            Block
              LastSection(
                title=lastSection.title
                text=lastSection.text
              )
  `
})
