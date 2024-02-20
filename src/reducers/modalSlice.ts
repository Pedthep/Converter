import { RootState } from '../stores/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { produce } from 'immer';

type DefaultPayload = {
    origin: string;
    converted: string;
};

interface ModalState {
    modalVisible: boolean;
    selectedState: string;
    originalUnitType: string;
    convertedUnitType: string;
};

const initialState: ModalState = {
    modalVisible: false,
    selectedState: "origin",
    originalUnitType: '',
    convertedUnitType: '',
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        handleModal(state) {
            state.modalVisible = !state.modalVisible;
        },

        setDefault(state, action: PayloadAction<DefaultPayload>) {
            const defaultValues = action.payload;
            state.originalUnitType = defaultValues.origin; 
            state.convertedUnitType = defaultValues.converted;
            
        },

        selectState(state, action: PayloadAction<{ selectedState: string }>) {
            state.selectedState = action.payload.selectedState;
        },

        setUnitType(state, action: PayloadAction<{ selectUnitType: string }>) {
            return produce(state, (draftState) => {
                const selectUnitType = action.payload.selectUnitType;
        
                if (draftState.selectedState === "origin") {
                    draftState.originalUnitType = selectUnitType;
                } else if (draftState.selectedState === "converted") {
                    draftState.convertedUnitType = selectUnitType;
                }
            });
        },
        
    },
});

export const { handleModal, selectState, setUnitType, setDefault } = modalSlice.actions;

export default modalSlice.reducer;