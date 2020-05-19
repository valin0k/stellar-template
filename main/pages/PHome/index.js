import React from 'react'
import { observer } from 'startupjs'
import { ScrollView } from 'react-native'
import { TopBar } from 'components'
import './index.styl'
import { Content } from '@startupjs/ui'

export default observer(function PHome () {
  return pug`
    TopBar
    ScrollView.root
      Content
  `
})
