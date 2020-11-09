import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = ({children, style}) => {
    return (
        <View style={{...styles.card, ...style}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        elevation: 5,
        backgroundColor: 'white'
    },
})

export default Card