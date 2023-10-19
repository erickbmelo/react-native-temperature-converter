import {StyleSheet, Text} from "react-native"

export default function DisplayTemperature(props) {
    return (
        <Text style={s.temperatureTxt}>{props.temperature} {props.unit}</Text>
    )
}

const s = StyleSheet.create({
    temperatureTxt: {
        fontSize: 70,
        color: "white"
    }
})