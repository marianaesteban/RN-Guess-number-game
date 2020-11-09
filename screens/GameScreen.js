import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import MainButton from '../components/MainButton'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if(exclude.includes(rndNum)) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

const GameScreen = ({ userChoice, onGameOver }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, [userChoice]))
    const [rounds, setRounds] = useState(0)
    const [guessedNumbers, setGuessedNumbers] = useState([])
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    useEffect(() => {
        if( currentGuess === userChoice) {
            onGameOver(rounds)
        }
    }, [currentGuess, onGameOver, userChoice])

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)) {
            Alert.alert(`Hey! Don't cheat`, 'Select the correct option for the next guess')
            return
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, guessedNumbers)
        setGuessedNumbers([currentGuess, ...guessedNumbers])
        setCurrentGuess(nextNumber)
        setRounds(curRounds => curRounds + 1)
    }

    const renderListItem = (data, round) => (
        <View style={styles.listItem}>
            <Text>Round #{round - data.index}</Text>
            <Text>{data.item}</Text>
        </View>
    )

    return (
        <View style={styles.screen}>
            <Text>Computer's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton icon="md-remove" onPress={() => nextGuessHandler('lower')} />
                <MainButton icon="md-add" onPress={() => nextGuessHandler('greater')} />
            </Card>
            {guessedNumbers.length > 0 &&
            <View style={styles.list}>
                <Text>Guessed numbers:</Text>
                <FlatList keyExtractor={(item) => `${item}`} data={guessedNumbers} renderItem={(number) => renderListItem(number, guessedNumbers.length)}/>
                {/* <ScrollView>
                    {guessedNumbers.map((number, index) => renderListItem(number, guessedNumbers.length - index))}
                </ScrollView> */}
            </View>
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300
    },
    list: {
        flex: 1,
        flexShrink: 1,
        flexBasis: '100%',
        width: '100%',
        maxWidth: '70%'
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default GameScreen