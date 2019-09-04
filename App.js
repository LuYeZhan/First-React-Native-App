import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { data } from './assets/data'

export default function App() {
  const[ selectedMovie, setSelectedMovie ] = useState( undefined )
  const pickMovie = () => {
    setSelectedMovie(data[Math.floor(Math.random() * data.length)])
  }

  return (
    <View style={styles.container}>
      <Text>{ selectedMovie ? selectedMovie.Title: "Pick a movie" }</Text>
      { selectedMovie && <Image source={{uri:selectedMovie.Images[0]}} style= {{width: 300, height: 300}} />}
      <TouchableOpacity onPress = { pickMovie } style= {{ backgroundColor:"orange", padding: 30 }} >
        <Text>Click!</Text>
      </TouchableOpacity>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
