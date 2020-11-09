
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/colors'

const MainButton = ({ title, icon, iconSize = 24, iconColor = 'white', onPress, style }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <View style={{...styles.button, ...style}}>
                <Text style={styles.buttonText}>
                    <Ionicons name={icon} size={iconSize} color={iconColor} />
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    },

})

export default MainButton