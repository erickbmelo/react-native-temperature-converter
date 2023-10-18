import {View, StyleSheet, TextInput, Text} from "react-native"

export default function Input(props) {
    return (
        <View style={s.root}>
            <TextInput
                style={s.input}
                placeholder="Digite a temperatura"
                maxLength={3}
                defaultValue={props.defaultValue.toString()}
            />
            <Text style={s.unit}>ºC</Text>
        </View>
    )
}

const s = StyleSheet.create({
    root: {
        alignSelf: "stretch",
        justifyContent: "center"
    },
    input: {
        backgroundColor: "white",
        height: 50,
        borderRadius: 20,
        paddingLeft: 25
    },
    unit: {
        position: "absolute",
        alignSelf: "flex-end",
        paddingRight: 25,
        fontSize: 30,
    },
})