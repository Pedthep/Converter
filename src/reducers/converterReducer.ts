import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../stores/store";

interface ConverterState {
    inputString: string,
}

const initialState: ConverterState = {
    inputString: "0",
}

export const ConverterSlice = createSlice({
    name: 'converter',
    initialState,
    reducers: {
        handleButton: (state, action: PayloadAction<string>) => {
            //buttonValue = parameter
            const buttonValue = action.payload

            if (buttonValue === "c") {
                //when buttonValue = c will state = initalState
                state.inputString = initialState.inputString
            } else if (buttonValue === "delete-left") {
                //when buttonValue = delete-left
                if (state.inputString.length > 1) {
                    //when length state > 1 will delete the last one
                    state.inputString = state.inputString.slice(0, -1);
                }
            } else if (buttonValue === "circle") {
                //when buttonValue = circle will add "."
                state.inputString += "."
            } else {
                if (state.inputString === "0") {
                    //when inputString = 0 will be replaced with buttonValue
                    state.inputString = buttonValue;
                } else {
                    //inputString add buttonValue with no replacement
                    state.inputString += buttonValue;
                }
            }
        }
    }
})

export const { handleButton } = ConverterSlice.actions

export const selectConverter = (state: RootState) => state.converter.inputString

export default ConverterSlice.reducer