import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { useAppDispatch } from "../stores/hooks";
import { handleModal, setUnitType } from "../reducers/modalSlice";

import UnitsData from "../data/UnitsData.json";

interface ListsProps {
    unitType: string;
}

const Lists: React.FC<ListsProps> = ({ unitType }) => {
    const dispatch = useAppDispatch();

    const handleSelectUnitType = (selectUnitType: string) => {
        dispatch(setUnitType({ selectUnitType: selectUnitType })),
        dispatch(handleModal())
    }

    return (
        <View>
            {UnitsData.map((row, index) => {
                if (row.type === unitType && row.units) {
                    return (
                        <View key={index}>
                            {row.units.map((unit, unitIndex) => (
                                <TouchableOpacity 
                                    key={unitIndex} 
                                    style={styles.list}
                                    onPress={() => handleSelectUnitType(unit.name)}
                                >
                                    <View style={styles.listContent}>
                                        <Text style={styles.listText}>{unit.name}</Text>
                                        <Text style={styles.badge}>{unit.abbreviation}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )
                }
                return null;
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        margin: 5,
        padding: 10,
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 10,
    },
    listContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listText: {
        fontSize: 24,
        marginLeft: 5,
    },
    badge: {
        width: '15%',
        fontSize: 16,
        backgroundColor: '#333',
        color: '#eee',
        padding: 5,
        borderRadius: 50,
        marginLeft: 10,
        textAlign: 'center',
    }
});

export default Lists;