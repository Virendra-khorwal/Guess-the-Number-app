import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import defualtStyle from "../constants/defualt-style";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={defualtStyle.title}>Game Over!</Text>
      <View style={styles.imageContainer}>
        <Image 
        source={require("../assets/success.png")} 
        style={styles.image} 
        /*source={{uri('url')}} this for network images*/ />
      </View>
      <Text style={defualtStyle.BodyText}>
        Number of Rounds: {props.round}{" "}
      </Text>
      <Text style={defualtStyle.BodyText}>
        The Number was: {props.userNumber}{" "}
      </Text>
      <Button
        title="Start Again"
        onPress={() => props.onGameStart()}
        style={defualtStyle.BodyText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 5,
    overflow: "hidden",
    borderColor: "black",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
