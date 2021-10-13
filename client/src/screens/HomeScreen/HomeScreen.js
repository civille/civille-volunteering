import * as React from 'react';
import { Text, View, TextInput, ImageBackground } from 'react-native';

//image
import bgroundImg from '../assets/bgroundImg.jpg';

import styles from './styles.js';

//posts
import post from '../components/post.js';

function HomeScreen() {

  const [text, onChangeText] = React.useState();

  return (
    <View className="App">
      <ImageBackground source={bgroundImg} resizeMode="cover" style={{marginTop: "10",
    marginBottom: "10"}}>
        <View>
          <h1 style={{fontWeight: "bold"}}>Mobilize volunteers through open calls for local engagement.</h1>
          <Text style={{fontSize: 30, fontWeight: "bold"}}>
            <Text>Use </Text>
            <Text style={{color: "blue"}}>Civille</Text><Text> to engage volunteers locally.</Text>
          </Text>
        </View>
          <Text>
            <Text style={styles.text}>Where?</Text>
            <Text style={styles.text}>What cause do you want to volunteer for?</Text>
          </Text>
          <View style={{flexDirection: "row"}}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Location"
            />
          
              <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Title or Keywords"
              keyboardType="numeric"
            />
          </View>
      </ImageBackground>
      <View style={styles.map}>
        <Text>Here goes the map</Text>
      </View>
      <View style={styles.map}>
        <Text>Here we have opportunities</Text>
        <post/>
        <post/>
        <post/>
      </View>
      <View style={styles.map}>
        <Text>Here is the cities</Text>
      </View>
    </View>
  );
}

export default HomeScreen;