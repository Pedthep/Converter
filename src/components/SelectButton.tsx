import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Dimensions } from "react-native"
import { useAppSelector, useAppDispatch } from "../stores/hooks"

import { handleModal, selectState } from "../reducers/modalSlice"


const SelectButton = ({ unitType }: { unitType: string }) => {
    const dispatch = useAppDispatch();

    const inputString = useAppSelector((state) => state.input.inputString);
    const origin = useAppSelector((state) => state.modal.originalUnitType);
    const converted = useAppSelector((state) => state.modal.convertedUnitType);
    const convertedValue = useAppSelector((state) => state.converter.convertedValue);

    const handleSelectState = (selectedState: string) => {
        dispatch(selectState({ selectedState: selectedState }))
    }

    const formatNumber = (convertedValue: number) => {
        if(Number.isInteger(convertedValue)) {
            return convertedValue.toString();
        } else {
            return convertedValue.toFixed(5)
        }
    }

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => {
                dispatch(() => handleSelectState("origin"));
                dispatch(handleModal());
                }}>
                <Text style={styles.selected}>{origin}</Text>
                <Text style={styles.textDisplay}>{inputString}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
                dispatch(() => handleSelectState("converted"));
                dispatch(handleModal());
                }}>
                <Text style={styles.selected}>{converted}</Text>
                <Text style={styles.textDisplay}>{formatNumber(convertedValue)}</Text>
            </TouchableOpacity>
        </View>
    )
}

const screen = Dimensions.get("window");
const buttonWidth = screen.width;
const buttonHeight = screen.height / 6;

const styles = StyleSheet.create({
    button: {
        width: Math.floor(buttonWidth - 10),
        height: Math.floor(buttonHeight),
        marginVertical: 5,
        backgroundColor: '#eee',
        padding: 25,
        borderRadius: 25,
    },
    textDisplay: {
        textAlign: 'right',
        textAlignVertical: 'center',
        fontSize: 32,
    },
    selected: {
        textAlign: 'left',
        textAlignVertical: 'top',
        fontSize: 18,
    }
})

export default SelectButton;