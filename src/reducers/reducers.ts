import { combineReducers } from "@reduxjs/toolkit";

import inputSlice from "./inputSlice";
import modalSlice from "./modalSlice";
import converterSlice from "./converterSlice";

const rootReducer = combineReducers({
    input: inputSlice,
    modal: modalSlice,
    converter: converterSlice,
});

export default rootReducer;