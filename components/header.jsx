import React from "react";
import {View, Text, StyleSheet } from "react-native";

import Colors from "../constants/color";
import defualtStyle from "../constants/defualt-style";


const Header = props => {
    return (
        <View style={styles.header} >
            <Text style={{...styles.headerTitle, ...defualtStyle.title}} >{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 36,
        width: '100%',
        height: 90
    },
    headerTitle: {
        color: 'white',
        fontSize:18,
        
    }
});

export default Header;