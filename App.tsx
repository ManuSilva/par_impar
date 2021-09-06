import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Provider as PaperProvider } from "react-native-paper";


//Definindo PROPs
interface Clicks {
  texto: String;
  count: Number;
}


function App(props: Clicks): JSX.Element {


  return (

    <View style={styles_text.container}>
      <Text style={{ fontSize: 39, color: "black" }}>{props.texto}</Text>
      <Text style={{ fontSize: 29, color: "green" }}>Quatidade de Click: {props.count}</Text>
      <StatusBar style="auto" />

    </View>

  );
}

export default function PaperApp() {
  const [e_par, setFlag] = useState(true);
  const [texto, setTexto] = useState("Par");
  const [e_click, setClick] = useState(0);


  const handleButtonPress = () => {
    setClick(e_click + 1)

    if (e_par) {
      setTexto("Ímpar");
      setFlag(false);
    } else {
      setTexto("Par");
      setFlag(true);
    }

  };

  const handleButtonReset = () => {
    setClick(0)
    setFlag(true);
    setTexto("Par");
  };

  return (
    <PaperProvider>
      <App texto={texto} count={e_click} />
      <View style={styles_button.container}>
        <Button icon="cursor-pointer" mode="contained" onPress={handleButtonPress}>
          Me Aperte
        </Button>
        <Button mode="contained" onPress={handleButtonReset}>
          Reset
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles_button = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#E9DBAB',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

const styles_text = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 50,
    borderColor: "#E9DBAB",

  },
});
