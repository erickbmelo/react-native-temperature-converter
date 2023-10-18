import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import hotBackground from './assets/hot.png';
import Input from './components/Input';

export default function App() {
  return (
    <ImageBackground style={s.backgroundImg} source={hotBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <Text>Temperature</Text>
            <Input defaultValue={0} />
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
