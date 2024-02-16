import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { StackScreenProps } from "../type";
import { useAppSelector } from "../stores/hooks";

import Keyboard from "../components/Keyboard";

import { useState, useEffect } from "react";

const originUnit = 1000; //Kilometer
const baseValue = 1; //Meter
const destinationUint = 0.01; //centimeter

const ConverterScreen = ({ route }: StackScreenProps) => {
    const { unitType } = route.params;

    const inputString = useAppSelector((state) => state.converter.inputString)
    const [inputValue, setInputValue] = useState(+inputString);
    const [convertedValue, setConvertedValue] = useState(+inputString);

    useEffect(() => {
        const inputValueNumeric = +inputString;
        setInputValue(inputValueNumeric);
        const middleValue = inputValue * originUnit;
        const result = middleValue / destinationUint;
        setConvertedValue(result);
    }, [inputString]);

    return (
        <View style={styles.container}>
            <Text>{inputString}</Text>
            <Text>{inputValue}</Text>
            <Text>{convertedValue}</Text>
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