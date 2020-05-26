import React from 'react'
import { observer } from 'startupjs'
import { ScrollView, View } from 'react-native'
import {
  Header,
  Block,
  ImageSection,
  IconSection,
  ColoredSection,
  LastSection,
  Footer,
  Menu
} from 'main/components'
import { imageSection, iconSection, coloredSection, lastSection, footer } from 'main/data'
import './index.styl'

export default observer(function PHome () {
  return pug`
    View.background
      ScrollView.root
        View.container
          Header
          View.content
            View.menu
              Menu
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
            Block(noSidePadding)
              LastSection(
                title=lastSection.title
                text=lastSection.text
              )
          Footer(icons=footer)
  `
})
