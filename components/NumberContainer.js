import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/colors'

const NumberContainer = ({children, style, ...restProps}) => {
    return <View style={{...styles.container, ...style}}><Text style={styles.number}>{children}</Text></View>
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.accent, 
        borderWidth: 2, 
        borderRadius: 10,
        padding: 10, 
        marginVertical: 10, 
        alignItems: 'center',
        justifyContent: 'center'
      },
    number: {
        color: Colors.accent,
        fontSize: 20,
    }
})

export default NumberContainer