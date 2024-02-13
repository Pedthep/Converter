import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackScreenProps } from "../type";

import Keyboard from "../components/Keyboard";

const ConverterScreen = ({ route }: StackScreenProps) => {
    const { unitType } = route.params;

    return (
        <View style={styles.container}>
            <Text>{unitType}</Text>
            <Keyboard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});


export default ConverterScreen;