import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  ScrollView
} from "react-native";
import Card from "../components/card";
import NumberInput from "../components/numberInput";
import { Ionicons } from "@expo/vector-icons";
import MainButton from "../components/mainButton";


const GuessRandom = (min, max, exclude)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random()*(max-min)) + min;
    if(rndNum=== exclude) return GuessRandom(min,max,exclude);
    return rndNum;
};

const GameScreen = props => {
    const intialGuess = GuessRandom(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(intialGuess);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [pastGuesses, setPastGuesses] = useState([intialGuess]);

    const {userChoice, onGameOver} = props;

    useEffect(()=>{
        if(currentGuess==userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if((direction=== 'lower' && currentGuess<props.userChoice) || (direction=== 'greater' && currentGuess>props.userChoice) ) {
            Alert.alert("Don't lie!", 'You know this is wrong...',[{text:'Sorry!', style:'cancel'}]);
            return;
        }

        if(direction==='lower') {
            currentHigh.current = currentGuess;
        }
        else {
            currentLow.current = currentGuess+1;
        }
        const nextNumber = GuessRandom(
            currentLow.current,
            currentHigh.current,
            currentGuess
        );

        setCurrentGuess(nextNumber);
        setPastGuesses( pastGuess => [nextNumber, ...pastGuess]);
    };

    return (
      <View style={styles.screen}>
        <Text>Opponent's Guess</Text>
        <NumberInput>{currentGuess}</NumberInput>
        <Card style={styles.buttonContainer}>
          <MainButton onPress={() => nextGuessHandler("lower")}>
            <Ionicons name="md-remove" size={24}></Ionicons>
          </MainButton>
          <MainButton onPress={() => nextGuessHandler("greater")}>
            <Ionicons name="md-add" size={24} />
          </MainButton>
        </Card>

        <ScrollView>
          <View style={styles.list}>
            {pastGuesses.map((guess) => (
              <Card style={styles.listCard}>
                <Text>{guess}</Text>
              </Card>
            ))}
          </View>
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  list: {
    marginVertical: 5,
    alignItems: "center",
  },
  listCard: {
    marginVertical: 5,
  },
});

export default GameScreen;