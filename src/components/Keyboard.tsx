import React from "react";
import { View, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { handleButton } from "../reducers/inputSlice";

import IconFontAwesome, { IconProps } from "./icons/FontAwesomeIcons";


const Keyboard = () => {
    const inputString = useAppSelector((state) => state.input.inputString)
    const dispatch = useAppDispatch();

    const Button = ({ icon }: { icon: IconProps }) => {
        const buttonStyles = icon.name === "0" ? [styles.button, {flex: 2}] : styles.button;
        
        return (
            <TouchableOpacity style={buttonStyles} onPress={() => dispatch(handleButton(icon.name))}>
                <IconFontAwesome icon={icon} />
            </TouchableOpacity>
        )
    }
    
    return (
        <View style={styles.row}>
            <View style={[styles.col, {flex: 0.75}]}>
                <View style={styles.row}>
                    <Button icon={{style: "fas", name: "7"}} />
                    <Button icon={{style: "fas", name: "8"}} />
                    <Button icon={{style: "fas", name: "9"}} />
                </View>
                <View style={styles.row}>
                    <Button icon={{style: "fas", name: "4"}} />
                    <Button icon={{style: "fas", name: "5"}} />
                    <Button icon={{style: "fas", name: "6"}} />
                </View>
                <View style={styles.row}>
                    <Button icon={{style: "fas", name: "1"}} />
                    <Button icon={{style: "fas", name: "2"}} />
                    <Button icon={{style: "fas", name: "3"}} />
                </View>
                <View style={styles.row}>
                    <Button icon={{style: "fas", name: "0"}} />
                    <Button icon={{style: "fas", name: "circle", size: 16}} />
                </View>
            </View>
            <View style={[styles.col, {flex: 0.25}]}>
                <Button icon={{style: "fas", name: "delete-left"}} />
                <Button icon={{style: "fas", name: "c"}} />
            </View>
        </View>
    )
}

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
    col: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        margin: 5,
        width: Math.floor(buttonWidth - 10),
        height: Math.floor(buttonWidth - 10),
        borderRadius: buttonWidth,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default Keyboard;