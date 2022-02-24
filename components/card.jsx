import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
    return (
        <View style = {{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    padding: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
    backgroundColor: "white",
    borderRadius: 8,
  },
});

export default Card;