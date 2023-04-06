import { StyleSheet, Text, View,StatusBar,TouchableOpacity,Platform,Image } from 'react-native'
import React from 'react'
import {NativeModules} from 'react-native';

const {VoiceChangingModule} = NativeModules;

const BridgingScreen = () => {

    const audioTrackURL = 'https://www.soundjay.com/ambient/sounds/boarding-accouncement-1.mp3';

    const changeToAlein = () => {
      Platform.OS === 'android' && VoiceChangingModule.changeVoiceToAlien(audioTrackURL)
    };
  
    const changeToChild = () => {
      Platform.OS === 'android' && VoiceChangingModule.changeVoiceToChild(audioTrackURL);
    };
  
    const changeToFast = () => {
      Platform.OS === 'android' && VoiceChangingModule.speedUpVoice(audioTrackURL);
    };
  
    const changeToSlow = () => {
      Platform.OS === 'android' && VoiceChangingModule.slowDownVoice(audioTrackURL);
    };
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={'#e4e5ea'} />
        <Text style={styles.title}>Voice Changer</Text>
        <Text style={styles.title}> Change Voice Effects </Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => changeToAlein()}>
            <Image
              source={{
                uri:
                  'https://icons.iconarchive.com/icons/google/noto-emoji-smileys/256/10101-alien-icon.png',
              }}
              resizeMode={'contain'}
              style={styles.icon}
            />
            <Text>Alien</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeToChild()}>
            <Image
              source={{
                uri:
                  'https://pics.freeicons.io/uploads/icons/png/2793494581535699799-512.png',
              }}
              resizeMode={'contain'}
              style={styles.icon}
            />
            <Text>Child</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeToFast()}>
            <Image
              source={{
                uri:
                  'https://www.pngjoy.com/pngl/346/6457386_black-arrows-fast-forward-symbol-transparent-png-download.png',
              }}
              resizeMode={'contain'}
              style={styles.icon}
            />
            <Text>Fast</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeToSlow()}>
            <Image
              source={require('../assets/slow.png')}
              resizeMode={'contain'}
              style={styles.icon}
            />
            <Text>Slow</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  
}

export default BridgingScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#e4e5ea',
      flex: 1,
      paddingTop: 50,
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      color: '#000',
      marginVertical: 25,
    },
    iconsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      paddingHorizontal: 50,
    },
    warningText: {
      color: 'red',
      fontWeight: 'bold',
      letterSpacing: 1.5,
      textAlign: 'center',
    },
    spacing: {
      marginVertical: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '40%',
    },
    icon: {
      height: 40,
      width: 40,
      marginBottom: 15,
    },
  });