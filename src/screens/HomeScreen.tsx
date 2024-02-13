import React from "react";
import { View, StyleSheet } from "react-native";

import UnitsData from "../data/UnitsData.json";
import UnitTypeButton from "../components/UnitTypeButton";
import type { iconProps } from "../components/icons/FontAwesomeIcons";

const HomeScreen = () => {
    const groupUnitType = [];
    for (let i = 0; i < UnitsData.length; i += 3) {
        groupUnitType.push(UnitsData.slice(i, i + 3));
    };


    return (
        <View style={style.container}>
            {groupUnitType.map((row, index) => (
                <View key={index} style={style.row}>
                    {row.map((unitType, index) => (
                        <UnitTypeButton
                            key={index} 
                            unitType={unitType.type}
                            icon={unitType.icon as iconProps}
                        />
                    ))}
                </View>
            ))}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: "row"
    }
})

export default HomeScreen;