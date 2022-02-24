import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

import Card from "../components/card";
import Colors from "../constants/color";
import Input from "../components/input";
import NumberInput from "../components/numberInput";
import defualtStyle from "../constants/defualt-style";
import MainButton from "../components/mainButton";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const onInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Entered number must be from 1 to 99.', [{text: 'Okay', style:'destructive', onPress: resetInputHandler}])
      return;
    }

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');

  };

  let confirmedOutput;

  if(confirmed){
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={defualtStyle.BodyText}>You Selected</Text>
        <NumberInput>{selectedNumber}</NumberInput>
        <MainButton
          onPress={() => props.onGameStart(selectedNumber)} 
        > Start Game </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={{ ...styles.title, ...defualtStyle.title }}>
          Start Game
        </Text>
        <Card style={styles.inputContainer}>
          <Text style={defualtStyle.BodyText}> Select a Number</Text>
          <Input
            onChangeText={onInputHandler}
            value={enteredValue}
            blurOnSubmit
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
          />
          <View style={styles.buttonContainer}>
            <Button
              title={"Reset"}
              onPress={resetInputHandler}
              color={Colors.secondary}
              style={defualtStyle.BodyText}
            />
            <Button
              title={"Confirm"}
              onPress={confirmInputHandler}
              color={Colors.primary}
              style={defualtStyle.BodyText}
            />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 15,
  },
  title: {
    fontSize: 20,
    marginVertical: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  input: {
    textAlign: "center",
    width: 50,
  },
  summaryContainer: {
    marginTop: 20,
    alignContent: "center",
  },
});

export default StartGameScreen;
