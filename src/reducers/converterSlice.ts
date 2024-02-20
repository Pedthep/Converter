import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../stores/store";

import { useAppSelector } from "../stores/hooks";
import { produce } from "immer";

interface ConverterState {
    unitTypeCurrent: string;
    inputNumber: number;
    originalUnitValue: number;
    convertedUnitValue: number;
    convertedValue: number;
};

const initialState: ConverterState = {
    unitTypeCurrent: "",
    inputNumber: 0,
    originalUnitValue: 0,
    convertedUnitValue: 0,
    convertedValue: 0,
};


const converterSlice = createSlice({
    name: "converter",
    initialState,
    reducers: {
        setUnitTypeCurrent: (state, action: PayloadAction<string>) => {
            state.unitTypeCurrent = action.payload
        },
        setUnitValue: (state, action: PayloadAction<{unitValue: number, selectUnit: string }>) => {
            if (action.payload.selectUnit === "origin") {
                state.originalUnitValue = action.payload.unitValue;
            } else if (action.payload.selectUnit === "converted") {
                state.convertedUnitValue = action.payload.unitValue;
            }
        },
        setConvertedValue: (state, action: PayloadAction<number>) => {
            state.convertedValue = action.payload
        },
        converter: (state) => {
            const inputString = useAppSelector((state) => state.input.inputString);
            const inputNumber = parseFloat(inputString);
            const originalUnitValue = state.originalUnitValue;
            const convertedUnitValue = state.convertedUnitValue;

            state.convertedValue = (inputNumber * originalUnitValue) / convertedUnitValue ;
        }
    }
})

export const { setUnitTypeCurrent, setUnitValue, setConvertedValue } = converterSlice.actions

export const selectUnitType = (state: RootState) => state.converter.unitTypeCurrent
export const selectUnitValue = (state: RootState) => state.converter;

export default converterSlice.reducer