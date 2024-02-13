import React from "react";
import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import IconFontAwesome from "./icons/FontAwesomeIcons";
import type { iconProps } from "./icons/FontAwesomeIcons";
import { StackScreenProps } from "../type";

type UnitTypeButtonProps = {
    unitType: string;
    icon: iconProps
}

const UnitTypeButton: React.FC<UnitTypeButtonProps> = ({unitType ,icon}) => {
    const navigation = useNavigation<StackScreenProps>();

    const goToConverter = () => (
        navigation.navigate('Converter', {unitType: unitType})
    );

    
    return (
        <TouchableOpacity style={style.button} onPress={goToConverter}>
            <IconFontAwesome icon={icon} />
            <Text style={style.text}>{unitType}</Text>
        </TouchableOpacity>
    )
}

const screen = Dimensions.get("screen");
const buttonWidth = screen.width / 3;

const style = StyleSheet.create({
    button: {
        flex: 1,
        margin: 5,
        height: Math.floor(buttonWidth - 10),
        borderRadius: Math.floor(buttonWidth / 6),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
    },
    text: {
        marginTop: 5,
        fontSize: 18,
    }
})

export default UnitTypeButton;