import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Keyboard, StyleSheet, Alert } from 'react-native'
import Colors from '../constants/colors'
import Card from '../components/Card'
import Button from '../components/Button'
import MainButton from '../components/MainButton'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

const StartScreen = ({onStart}) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number needs to be a number between 1 and 99', [{text: 'Ok', style: 'destructive', onPress: resetHandler}])
            return
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
    }
    
    const startHandler = () => {
        onStart(selectedNumber)
    }

    let confirmedOutput

    if (confirmed) {
        confirmedOutput = (
        <Card style={styles.summaryContainer}>
            <Text> You Selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton title='Start Game' onPress={startHandler}/>
        </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() =>{ Keyboard.dismiss()}}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.card}>
                <Text>Select a Number</Text>
                <Input value={enteredValue} onChangeText={numberInputHandler}blurOnSubmite autoCapitalize='none' autoCorrect={false} keyboardType='number-pad' maxLength={2} style={styles.input}/>
                <View style={styles.buttonContainer}>
                    <Button title='Reset' style={styles.button} onPress={resetHandler} color={Colors.accent} disabled={enteredValue.length === 0}/>
                    <Button title='Confirm' style={styles.button} onPress={confirmHandler} color={Colors.primary}  disabled={enteredValue.length === 0}/>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
      fontSize: 20,
      marginVertical: 10,
      fontFamily: 'open-sans-bold'
  },
  card: {
      width: 300,
      maxWidth: '80%',
      alignItems: 'center'
  },
  input: {
      width: 50,
      fontSize: 20,
      textAlign: 'center',
  },
  summaryContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
  },
});

export default StartScreen