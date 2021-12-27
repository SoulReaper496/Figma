import React from "react";
import { StyleSheet, View, Animated, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const Progress = ({ step, steps, height }) => {
  const [width, setWidth] = React.useState(0);
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  React.useEffect(() => {
    //-width + width * step/steps
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <>
      <View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: height,
          overflow: "hidden",
        }}
      >
        <Animated.View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            borderRadius: height,
            position: "absolute",
            left: "0",
            top: "0",
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          }}
        />
      </View>
    </>
  );
};

export default function Bar() {
  return (
    <View>
      <StatusBar hidden />
      <Progress step={1} steps={10} height={20} />
    </View>
  );
}
