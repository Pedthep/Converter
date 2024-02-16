import { useState } from "react";
import { useAppSelector } from "../stores/hooks";

const originUnit = 1000; //Kilometer
const baseValue = 1; //Meter
const destinationUint = 0.01; //centimeter

const inputString = useAppSelector((state) => state.converter.inputString)
export const [inputValue, setInputValue] = useState(+inputString);
export const [convertedValue, setConvertedValue] = useState(+inputString);

const middleValue: number = inputValue * originUnit;
() => setConvertedValue(middleValue / destinationUint)

