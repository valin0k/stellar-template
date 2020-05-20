import React from 'react'
import { Image } from 'react-native'
import { observer } from 'startupjs'
import sizes from './sizes'

export default observer(function Svg ({
  uri,
  width,
  height,
  size = 'm',
  ...props
}) {
  const _size = sizes[size]
  return pug`
    Image(
      width=width || _size
      height=height || _size
      source={uri}
    )
  `
})
