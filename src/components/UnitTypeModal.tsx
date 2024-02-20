import React from "react";
import { Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import IconFontAwesome from "./icons/FontAwesomeIcons";

import { useAppSelector, useAppDispatch } from "../stores/hooks";
import { handleModal } from "../reducers/modalSlice";

import Lists from "./Lists";

interface unitTypeModalProps {
    unitType: string;
}
    
const UnitTypeModal: React.FC<unitTypeModalProps> = ({ unitType }) => {
    const dispatch = useAppDispatch();

    const modalVisible = useAppSelector((state) => state.modal.modalVisible)
    const selectButtonState = useAppSelector((state) => state.modal.selectedState)

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                dispatch(handleModal());
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Select unit {selectButtonState}</Text>
                        <TouchableOpacity onPress={() => dispatch(handleModal())}>
                            <IconFontAwesome icon={{style: "fas", name: "x", size: 24}} />
                        </TouchableOpacity>
                    </View>
                    <Lists unitType={unitType}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: '100%',
        height: '100%',
        margin: 10,
        padding: 35,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#eee',
    },
    title: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 24,
    },
});

export default UnitTypeModal;