// @flow

import * as React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { cacheStyles } from 'react-native-patina'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { unpackEdges } from '../../util/edges'
import { type Theme, useTheme } from '../services/ThemeContext.js'

export function ModalTitle(props: { children: React.Node, center?: boolean, paddingRem?: number[] | number }) {
  const theme = useTheme()
  const styles = getStyles(theme)

  return <Text style={[styles.titleText, props.center ? styles.titleCenter : null, paddingStyles(props.paddingRem || 1, theme)]}>{props.children}</Text>
}

export function ModalMessage(props: { children: React.Node }) {
  const theme = useTheme()
  const styles = getStyles(theme)

  return <Text style={styles.messageText}>{props.children}</Text>
}

export function ModalCloseArrow(props: { onPress: () => void }) {
  const theme = useTheme()
  const styles = getStyles(theme)

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.closeArrow}>
      <FontAwesome5 name="chevron-down" size={theme.rem(1.25)} color={theme.iconTappable} />
    </TouchableOpacity>
  )
}

function paddingStyles(paddingRem: number[] | number, theme: Theme) {
  const padding = unpackEdges(paddingRem ?? 1)

  return {
    paddingBottom: theme.rem(padding.bottom),
    paddingLeft: theme.rem(padding.left),
    paddingRight: theme.rem(padding.right),
    paddingTop: theme.rem(padding.top)
  }
}

const getStyles = cacheStyles((theme: Theme) => ({
  closeArrow: {
    alignItems: 'center',
    paddingTop: theme.rem(1)
  },
  titleText: {
    color: theme.primaryText,
    fontFamily: theme.fontFaceBold,
    fontSize: theme.rem(1.25),
    margin: theme.rem(0.5)
  },
  titleCenter: {
    textAlign: 'center'
  },
  messageText: {
    color: theme.primaryText,
    fontFamily: theme.fontFaceDefault,
    fontSize: theme.rem(1),
    margin: theme.rem(0.5),
    textAlign: 'left'
  }
}))
