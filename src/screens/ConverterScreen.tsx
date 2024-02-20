import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppSelector, useAppDispatch } from "../stores/hooks";
import { RootState } from "../stores/store";
import { selectUnitValue, setConvertedValue, setUnitValue } from "../reducers/converterSlice";


import { setDefault } from "../reducers/modalSlice"

import Keyboard from "../components/Keyboard";
import SelectButton from "../components/SelectButton";
import UnitTypeModal from "../components/UnitTypeModal";

import UnitsData from "../data/UnitsData.json";
import { StackScreenProps } from "../type";
import { handleButton } from "../reducers/inputSlice";

const ConverterScreen: React.FC = ({ route }: StackScreenProps) => {
    const unitType = route.params.unitType;
    const dispatch = useAppDispatch();

    const originalUnitType = useAppSelector((state: RootState) => state.modal.originalUnitType);
    const convertedUnitType = useAppSelector((state: RootState) => state.modal.convertedUnitType);

    const inputString = useAppSelector((state: RootState) => state.input.inputString);
    const originalUnitValue = useAppSelector((state: RootState) => state.converter.originalUnitValue);
    const convertedUnitValue = useAppSelector((state: RootState) => state.converter.convertedUnitValue);

    useEffect(() => {
        UnitsData.forEach((row) => {
            if (row.type === unitType && row.units) {
                const originUnit = row.units[0];
                const convertedUnit = row.units[1];
                
                dispatch(setDefault({
                    origin: originUnit.name,
                    converted: convertedUnit.name
                }));
                
                dispatch(setUnitValue({
                    unitValue: originUnit.value,
                    selectUnit: "origin"
                }));

                dispatch(setUnitValue({
                    unitValue: convertedUnit.value,
                    selectUnit: "converted"
                }));
            }
        });
        dispatch(handleButton("c"));
    }, [unitType]);

    useEffect(() => {
        UnitsData.forEach((row) => {
            if(row.units) {
                const originalUnit = row.units.find(unit => unit.name === originalUnitType);
                const convertedUnit = row.units.find(unit => unit.name === convertedUnitType);

                if (originalUnit) {
                    dispatch(setUnitValue({
                        unitValue: originalUnit.value,
                        selectUnit: "origin"
                    }))
                }

                if (convertedUnit) {
                    dispatch(setUnitValue({
                        unitValue: convertedUnit.value,
                        selectUnit: "converted"
                    }))
                }
            }
        })
    }, [originalUnitType, convertedUnitType]);

    useEffect(() => {
        const inputNumber = parseFloat(inputString);
        const convertedValue = (inputNumber * originalUnitValue) / convertedUnitValue;
        dispatch(setConvertedValue(convertedValue))
    }, [inputString, originalUnitValue, convertedUnitValue])

    return (
        <View style={styles.container}>
            <SelectButton unitType={unitType} />
            <Text>{originalUnitValue}</Text>
            <Text>{convertedUnitValue}</Text>
            <Text>{unitType}</Text>
            <Keyboard />
            <UnitTypeModal unitType={unitType} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});


export default ConverterScreen;