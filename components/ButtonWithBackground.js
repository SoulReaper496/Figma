// React Native Bottom Action Menu
// https://aboutreact.com/react-native-bottom-action-menu/

// import React in our code
import React, { useRef } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Button,
} from "react-native";

// import ActionSheet
import ActionSheet from "react-native-actionsheet";

const ButtonWithBackground = () => {
  let actionSheet = useRef();
  var optionArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const showActionSheet = () => {
    //To show the Bottom ActionSheet
    actionSheet.current.show();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>React Native Bottom Action Menu</Text>
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={showActionSheet}
        >
          <Text style={styles.buttonTextStyle}>Open Buttom ActionSheet</Text>
        </TouchableHighlight>
        <Text style={styles.titleStyle}>www.aboutreact.com</Text>
        <ActionSheet
          ref={actionSheet}
          // Title of the Bottom Sheet
          title={"Your Prediction is Under "}
          // Options Array to show in bottom sheet
          options={optionArray}
          // Define cancel button index in the option array
          // This will take the cancel option in bottom
          // and will highlight it
          createButton={"Submit Applications"}
          // Highlight any specific option
          destructiveButtonIndex={1}
          onPress={(index) => {
            select(index);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default ButtonWithBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    paddingTop: 30,
    backgroundColor: "#307ecc",
    padding: 16,
  },
  buttonStyle: {
    width: "100%",
    height: 40,
    padding: 10,
    backgroundColor: "#f5821f",
    marginTop: 30,
  },
  buttonTextStyle: {
    color: "white",
    textAlign: "center",
  },
  titleStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
  },
});
