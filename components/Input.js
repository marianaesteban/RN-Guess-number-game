import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import Colors from '../constants/colors'

const Input = ({style, ...restProps}) => {
    return <TextInput {...restProps} style={{...styles.input, ...style}} />
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'grey', 
        borderBottomWidth: 1, 
        padding: 10, 
        width: '100%', 
        marginVertical: 10
      },
})

export default Input