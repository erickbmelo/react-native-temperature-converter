import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import hotBackground from './assets/hot.png';
import Input from './components/Input';
import DisplayTemperature from './components/DisplayTemperature';
import { useState } from 'react';
import { convertTemperatureTo, getOppositeUnit } from './utils/temperature';

export default function App() {
  const [inputValue, setInputValue] = useState(0)
  const [currentUnit, setCurrentUnit] = useState("ºC")
  const oppositeUnit = getOppositeUnit(currentUnit)

  function getConvertedTemperature(){
    if(isNaN(inputValue)){
      return ""
    } else{
      return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1)
    }
  }

  return (
    <ImageBackground style={s.backgroundImg} source={hotBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemperature
              unit={oppositeUnit}
              temperature={getConvertedTemperature()}
            />
            <Input
              onChange={setInputValue}
              defaultValue={0}
              unit={currentUnit}
            />
            <Text>Button</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  workspace: {
    height: 450,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  backgroundImg: {
    height: "100%",
  }
});
