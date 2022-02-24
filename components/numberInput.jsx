import React from "react";
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../constants/color'
import defualtStyle from "../constants/defualt-style";

const NumberInput = (props) => {
    return (
        <View style={styles.container} >
            <Text style={{...styles.number, ...defualtStyle.BodyText}} >{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.secondary,
        padding: 10,
        borderRadius:10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    number: {
        color: Colors.secondary,
        fontSize: 22,
        fontFamily: 'open-sans'
    }
});

export default NumberInput;