import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/header";
import GameOverScreen from "./screen/GameOverScreen";
import GameScreen from "./screen/GameScreen";
import StartGameScreen from "./screen/StartGameScreen";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

const fetchFont = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [currRound, setCurrRound] = useState(0);
  const [appLoaded, setAppLoaded] = useState(false);

  if(!appLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setAppLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setCurrRound(0);
  };

  const startGameAgain = () => {
    setCurrRound(0);
    setUserNumber(null);
  };

  const gameOverHandler = (gameRound) => {
    setCurrRound(gameRound);
  };

  let content = <StartGameScreen onGameStart={startGameHandler} />;

  if (userNumber && currRound == 0)
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  else if (currRound > 0) {
    content = (
      <GameOverScreen
        round={currRound}
        userNumber={userNumber}
        onGameStart={startGameAgain}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title={"Guess the Number"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
 
  },
});
