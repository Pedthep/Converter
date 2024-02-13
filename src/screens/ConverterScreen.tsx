import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackScreenProps } from "../type";

const ConverterScreen = ({ route }: StackScreenProps) => {
    const { unitType } = route.params;

    return (
        <View style={styles.container}>
            <Text>{unitType}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default ConverterScreen;