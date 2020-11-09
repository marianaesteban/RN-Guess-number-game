import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Card from '../components/Card'
import MainButton from '../components/MainButton'
import NumberContainer from '../components/NumberContainer'
import colors from '../constants/colors'

const Component = ({rounds, userChoice, onRestart}) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Game over!</Text>
            <View style={styles.imageContainer}><Image style={styles.image} source={require('../assets/success.png')} /></View>
            <Card style={styles.card}>
                <Text>Your number was</Text>
                <NumberContainer>{userChoice}</NumberContainer>
                <Text>The computer took {rounds} rounds to guess it</Text>
            </Card>
            <MainButton title='Play Again!' color={colors.primary} onPress={onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        overflow: 'hidden',
        height: 300,
        width: 300,
        borderRadius: 150,
        borderColor: 'black',
        borderWidth: 2,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
})

export default Component