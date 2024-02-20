import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../stores/store";

interface InputState {
    inputString: string,
}

const initialState: InputState = {
    inputString: "0",
}

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        handleButton: (state, action: PayloadAction<string>) => {
            //buttonValue = parameter
            const buttonValue = action.payload

            if (buttonValue === "c") {
                //when buttonValue = c will state = initialState
                state.inputString = initialState.inputString
            } else if (buttonValue === "delete-left") {
                //when buttonValue = delete-left
                if (state.inputString.length > 1) {
                    //when length state > 1 will delete the last one
                    state.inputString = state.inputString.slice(0, -1);
                } else if (state.inputString.length < 2 && state.inputString !== "0") {
                    state.inputString = "0";
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

export const { handleButton } = inputSlice.actions

export const selectInput = (state: RootState) => state.input.inputString

export default inputSlice.reducer