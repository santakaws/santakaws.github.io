import logo from './logo.svg';
import { useState } from 'react';
import { getWildfirePrediction } from './backendCommunication';
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text } from "react-native";
import './App.css';

function App() {
  const [stnID, onChangeStnID] = useState("");
  const [month, onChangeMonth] = useState("");
  const [eto, onChangeEto] = useState("");
  const [precip, onChangePrecip] = useState("");
  const [solRad, onChangeSolRad] = useState("");
  const [avgVap, onChangeVap] = useState("");
  const [maxAir, onChangeMaxAir] = useState("");
  const [minAir, onChangeMinAir] = useState("");
  const [avgAir, onChangeAvgAir] = useState("");
  const [maxHum, onChangeMaxHum] = useState("");
  const [minHum, onChangeMinHum] = useState("");
  const [avgHum, onChangeAvgHum] = useState("");
  const [avgWind, onChangeAvgWind] = useState("");
  const [avgSoil, onChangeAvgSoil] = useState("");

  async function buttonHandler() {
    const features =  [stnID,month,eto,precip,solRad,avgVap,maxAir,minAir,avgAir,maxHum,minHum,avgHum,avgWind,avgSoil];
    const jsonResult = await getWildfirePrediction(features);
    const result = jsonResult.prediction
    console.log(result);
  }

  return (
    
      <View style={styles.container}>
      <SafeAreaView>
      <Text style={styles.text}>Wildfire Predictor</Text>
      <Text style={styles.smalltext}>Wildfire prediction is becoming increasingly important as firefighting officials develop new strategies to counter large wildfires.</Text>
      <Text style={styles.smalltext}>This tool predicts whether a wildfire is likely or not given various features, mainly weather.</Text>
      <Text style={styles.smalltext}>The tool makes use of a machine learning model in order to provide decent predictions. The model was trained on data that went through preprocessing stages like cleaning and feature analysis/reduction.</Text>
      <Text style={styles.smalltext}>This tool is NOT meant to be a replacement for traditional prediction methods nor experienced officials. It is meant to be an experiment.</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeStnID}
          value={stnID}
          placeholder="Enter CIMIS Station ID"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeMonth}
          value={month}
          placeholder="Enter Month (MM)"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEto}
          value={eto}
          placeholder="Enter ETo"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePrecip}
          value={precip}
          placeholder="Enter Precipitation"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSolRad}
          value={solRad}
          placeholder="Enter Solar Radiation"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeVap}
          value={avgVap}
          placeholder="Enter Avg. Vapor Press"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeMaxAir}
          value={maxAir}
          placeholder="Enter Max Air Temp."
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeMinAir}
          value={minAir}
          placeholder="Enter Min Air Temp."
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeAvgAir}
          value={avgAir}
          placeholder="Enter Avg. Air Temp"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeMaxHum}
          value={maxHum}
          placeholder="Enter Max Humidity"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeMinHum}
          value={minHum}
          placeholder="Enter Min Humidity"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeAvgHum}
          value={avgHum}
          placeholder="Enter Avg. Humidity"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeAvgWind}
          value={avgWind}
          placeholder="Enter Avg. Wind Speed"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeAvgSoil}
          value={avgSoil}
          placeholder="Enter Avg. Soil Temp."
          keyboardType="numeric"
        />

        <Button
          title='Submit'
          onPress={buttonHandler}
        />
      </SafeAreaView>
      </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 50,
    fontWeight: '500',
  },
  smalltext: {
    fontSize: 20,
    fontWeight: '200',
    width: 500
  },
});

export default App;
