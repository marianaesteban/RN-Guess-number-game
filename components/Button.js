import React from 'react'
import { Button as RNButton, View, StyleSheet } from 'react-native'

const Button = ({title, style, ...restProps}) => <View style={{...styles, ...style}}><RNButton {...restProps} title={title} /></View>

const styles = StyleSheet.create({
    width: 110,
    marginHorizontal: 10,
})

export default Button