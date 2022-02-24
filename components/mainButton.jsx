import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import Colors from '../constants/color'

const MainButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.6} >
            <View style={styles.button} >
                <Text style={styles.text} >{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius:5
    },
    text: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 20
    }
});

export default MainButton;