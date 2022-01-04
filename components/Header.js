import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import {
  AntDesign,
  FontAwesome5,
  FontAwesome,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

import * as Progress from "react-native-progress";
{
  /* progress bar */
}

function Header() {
  return (
    <>
      <Text style={styles.text}>Today's Games</Text>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              marginLeft: 5,
              marginTop: 10,
            }}
          >
            {" "}
            UNDER OR OVER{" "}
          </Text>
          <AntDesign
            name="exclamationcircleo"
            size={10}
            color="white"
            style={{ marginTop: 12, marginRight: 50 }}
          />
          <Text
            style={{
              color: "#B296DC",
              fontSize: 13,
              marginTop: 10,
              marginLeft: 160,
            }}
          >
            {" "}
            Starting in
          </Text>
          <AntDesign
            name="clockcircleo"
            size={15}
            color="white"
            style={{ marginTop: 10, marginLeft: 5 }}
          />
          <Text
            style={{
              color: "white",
              marginTop: 5,
              justifyContent: "center",
              fontSize: 20,
              marginRight: 20,
            }}
          >
            03:52:29
          </Text>
        </View>
        <View style={{ marginTop: 35 }}>
          <Text style={{ color: "#B296DC", fontSize: 20 }}>
            {" "}
            Bitcoin price will be under{" "}
          </Text>
          <Text style={{ color: "white" }}>
            {" "}
            $24,524 at 7 a ET on 22nd Jan’21{" "}
          </Text>
        </View>
        <View style={styles.container2}>
          <FontAwesome name="bitcoin" size={40} color="#B296DC" />
        </View>
      </View>
      <View style={styles.div2}>
        <Text style={{ color: "#B5C0C8", marginLeft: 20 }}>PRIZE POOL</Text>
        <Text style={{ color: "#B5C0C8" }}>UNDER</Text>
        <Text style={{ color: "#B5C0C8" }}>OVER</Text>
        <Text style={{ color: "#B5C0C8", marginRight: 20 }}>ENTRY FEE</Text>
      </View>

      <View style={styles.div3}>
        <Text style={{ color: "#333333", marginLeft: 30 }}>$12000</Text>
        <Text style={{ color: "#333333", marginLeft: 50 }}>3.25x</Text>
        <Text style={{ color: "#333333", marginLeft: 50 }}>1.25x</Text>
        <Text style={{ color: "#333333", marginLeft: 60 }}>5</Text>
        <FontAwesome5
          name="coins"
          size={20}
          color="gold"
          style={{ marginRight: 30 }}
        />
      </View>
      <Text
        style={{
          marginTop: 10,
          marginLeft: 30,
          fontSize: 20,
        }}
      >
        What’s your prediction?
      </Text>
      <View style={styles.container3}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Under</Text>
          <Entypo
            name="arrow-down"
            size={20}
            color="white"
            style={{ alignItems: "center", marginTop: -18 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={() => setShow(true)}>
          <Text style={styles.buttonText1}>Over</Text>
          <Entypo
            name="arrow-up"
            size={20}
            color="white"
            style={{ alignItems: "center", marginTop: -18 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => setShow(true)}>
          <Text style={styles.buttonText1}>Over</Text>
          <Entypo name="arrow-up" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.container4}>
        <View
          style={{
            marginTop: 10,

            marginRight: 50,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Ionicons
            name="person-sharp"
            size={20}
            color="#727682"
            style={{ marginLeft: 10 }}
          />
          <Text style={{ marginRight: 110, color: "#727682", fontSize: 15 }}>
            355 Players
          </Text>
          <FontAwesome5 name="chart-area" size={24} color="#727682" />
          <Text style={{ fontSize: 15 }}> ViewChart</Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Progress.Bar
            progress={0.7}
            color="#FE4190"
            borderColor="white"
            width={400}
            style={{
              backgroundColor: "#2DABAD",
            }}
          />
        </View>

        <View
          style={{
            marginTop: 30,
            marginLeft: 50,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text style={{ marginRight: 80 }}>232 Predictions Under</Text>
          <Text style={{ marginRight: 60 }}> 123 prediction Over</Text>
        </View>
      </View>
    </>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 15,

    backgroundColor: "#5215A4",
  },
  text: {
    fontSize: 20,
    marginTop: 30,
    marginLeft: 20,
    fontWeight: "bold",
  },
  container1: {
    flexDirection: "row",
  },
  container2: {
    marginLeft: 450,
  },
  container3: {
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  container4: {
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: "#F6F3FA",
    width: 500,
    height: 120,
  },
  button: {
    backgroundColor: "#452C55",
    padding: 20,
    borderRadius: 100,
    height: 60,
    width: 150,
  },
  buttonText: {
    color: "white",

    textAlign: "center",
    fontSize: 18,
  },
  button1: {
    backgroundColor: "#6231AD",
    padding: 20,
    borderRadius: 100,
    height: 60,
    width: 150,
  },
  buttonText1: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },

  div2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  div3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
