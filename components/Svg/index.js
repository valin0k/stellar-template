import React from 'react'
import SvgUri from 'react-native-svg-uri'
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
    SvgUri(
      width=width || _size
      height=height || _size
      source={uri}
    )
  `
})
