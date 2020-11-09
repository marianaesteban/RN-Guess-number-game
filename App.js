import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/Header'
import StartScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}
export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [rounds, setRounds] = useState(0)
  const [loading, setLoading] = useState(true)

  if (loading) {
      return <AppLoading startAsync={fetchFonts} onFinish={() => setLoading(false)} />
  }
  const restartHandler = () => {
    setRounds(0) 
    setUserNumber(null)
  }

  const startHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setRounds(0)
  }

  const gameOverHandler = nOfRounds => {
    setRounds(nOfRounds)
  }

  let content = <StartScreen onStart={startHandler}/>

  if(userNumber && rounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (rounds > 0) {
    content = <GameOverScreen userChoice={userNumber} rounds={rounds} onRestart={restartHandler} />
  }
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    fontFamily: 'open-sans-bold'
  },
});
