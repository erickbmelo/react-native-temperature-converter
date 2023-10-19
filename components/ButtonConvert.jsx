import {StyleSheet, TouchableOpacity, Text} from "react-native"

export default function ButtonConvert(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={s.button}>
            <Text style={s.buttonTxt}>Converter para {props.unit}</Text>
        </TouchableOpacity>
    )
}

const s = StyleSheet.create({
    button: {
        backgroundColor: "black",
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 30,
        width: 250,
    },
    buttonTxt: {
        alignSelf: "center",
        fontWeight: "bold",
        color: "white"
    }
})