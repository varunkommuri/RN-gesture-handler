import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,Animated } from 'react-native';
import GestureHanlder,{PinchGestureHandler,State} from 'react-native-gesture-handler'

export default function App() {
  let scale = new Animated.Value(1);
  onPinchEvent = Animated.event(
    [
      {
        nativeEvent: { scale:scale }
      }
    ],
    {
      useNativeDriver: true
    }
  )
  onPinchStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {
        toValue: scale,
        useNativeDriver: true
      }).start()
      /* Animated.event(
        [
          {
            nativeEvent: { scale:scale }
          }
        ],
        {
          useNativeDriver: true
        }
      ) */
    }
  }
  return (
    <View style={styles.container}>
    <PinchGestureHandler
      onGestureEvent={onPinchEvent}
      onHandlerStateChange={onPinchStateChange}
    
    >
      <Animated.Image
      source={{uri:'https://admin.hksinc.com/wp-content/uploads/2018/09/SanFrancisco_01.jpg'}}
      style={{height:400,width:400,transform:[{scale: scale}]}}
      resizeMode="contain"

      />
      </PinchGestureHandler>
      <StatusBar style="auto" />
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
