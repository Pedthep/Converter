import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    Converter: { unitType: string };
};

export type StackScreenProps = NativeStackScreenProps<
    RootStackParamList,
    Home,
    Converter,
>;
