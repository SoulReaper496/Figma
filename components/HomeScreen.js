import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";

import {
  AntDesign,
  FontAwesome5,
  FontAwesome,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

import * as Progress from "react-native-progress";

import { useFonts } from "expo-font";

export default function HomeScreen() {
  const [loaded] = useFonts({
    Montserrat500: require("../assets/font/Montserrat-Bold.ttf"),
    Montserrat600: require("../assets/font/Montserrat-Regular.ttf"),
    Montserrat700: require("../assets/font/Montserrat-SemiBold.ttf"),
    Avenir: require("../assets/font/AvenirNextLTPro-Regular.otf"),
    AvenirBold: require("../assets/font/AvenirNextLTPro-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.secondaryContainer}>
        <View style={styles.gameText}>
          <Text
            style={{
              width: 200,
              height: 30,
              fontFamily: "AvenirBold",
              fontWeight: "600",
              fontSize: 18,
            }}
          >
            Today's Games
          </Text>
        </View>
        <View style={styles.box1}>
          <View style={styles.row1}>
            <View style={styles.text1}>
              <Text
                style={{
                  color: "#D2BAF5",
                  fontFamily: "Montserrat500",
                  fontSize: 15,
                }}
              >
                {" "}
                UNDER OR OVER{" "}
              </Text>
              <AntDesign
                name="exclamationcircleo"
                size={10}
                color="#D2BAF5"
                style={{
                  marginTop: 3,
                  fontSize: 14,
                  fontWeight: "bold",
                  marginLeft: 5,
                }}
              />
            </View>
            <View style={styles.te2}>
              <Text
                style={{
                  fontFamily: "Montserrat700",
                  color: "#B296DC",
                  fontSize: 14,

                  marginLeft: 70,
                }}
              >
                Starting in
              </Text>
              <AntDesign
                name="clockcircle"
                size={15}
                color="#D2BAF5"
                style={{ marginLeft: 10, marginTop: 3 }}
              />
              <Text
                style={{
                  color: "#D2BAF5",
                  fontFamily: "Montserrat700",
                  fontSize: 15,
                  marginLeft: 5,
                }}
              >
                03:23:12
              </Text>
            </View>
          </View>
          <View style={styles.row2}>
            <Text style={{ color: "#D2BAF5", fontFamily: "Montserrat700" }}>
              Bitcoin price will be under
            </Text>
            <View style={styles.row3}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Montserrat700",
                  fontWeight: "bold",
                }}
              >
                $24,524{" "}
              </Text>
              <Text style={{ color: "#D2BAF5", fontFamily: "Montserrat700" }}>
                at 7 a ET on 22nd Jan’21
              </Text>

              <FontAwesome
                name="bitcoin"
                size={40}
                color="#4D1C8B"
                style={{ marginLeft: 140, marginTop: 5, paddingBottom: 30 }}
              />
            </View>
          </View>
        </View>
        <View style={styles.box2}>
          <View style={styles.row1bx2}>
            <Text
              style={{
                color: "#B5C0C8",
                fontFamily: "Montserrat700",
              }}
            >
              PRIZE POOL
            </Text>
            <Text style={{ color: "#B5C0C8", fontFamily: "Montserrat700" }}>
              UNDER
            </Text>
            <Text style={{ color: "#B5C0C8", fontFamily: "Montserrat700" }}>
              OVER
            </Text>
            <Text style={{ color: "#B5C0C8", fontFamily: "Montserrat700" }}>
              ENTRY FEES
            </Text>
          </View>
          <View style={styles.row2ofbox2}>
            <Text
              style={{
                color: "#333333",
                fontFamily: "Avenir",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              $12,000
            </Text>
            <Text
              style={{
                color: "#333333",
                fontFamily: "Avenir",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              3.25x
            </Text>
            <Text
              style={{
                color: "#333333",
                fontFamily: "Avenir",
                fontWeight: "bold",
                fontSize: 14,
                marginRight: 20,
              }}
            >
              1.25x
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "#333333",
                  fontFamily: "Avenir",
                  fontWeight: "bold",
                  fontSize: 14,
                  paddingRight: 10,
                }}
              >
                5
              </Text>
              <FontAwesome
                name="circle"
                size={15}
                color="gold"
                style={{ marginTop: 2 }}
              />
            </View>
          </View>
        </View>
        <View style={styles.box3}>
          <View style={styles.row1ofbx3}>
            <Text
              style={{
                color: "#727682",
                fontSize: 14,
                fontFamily: "Montserrat700",
              }}
            >
              What’s your prediction?
            </Text>
          </View>
          <View style={styles.bx3row2}>
            <TouchableOpacity style={styles.button}>
              <View style={styles.buttoninside}>
                <Entypo
                  name="arrow-down"
                  size={15}
                  color="#FFFFFF"
                  style={{ marginTop: 12 }}
                />
                <Text style={styles.buttonText}>Under</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => setShow(true)}
            >
              <View style={styles.insidebutton1}>
                <Entypo
                  name="arrow-up"
                  size={15}
                  color="#FFFFFF"
                  style={{ marginTop: 10 }}
                />
                <Text style={styles.buttonText1}>Over</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box4}>
          <View style={styles.box4row1}>
            <View style={styles.players}>
              <Ionicons
                name="person-sharp"
                size={13}
                color="#727682"
                style={{ marginTop: 2.3 }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 14,
                  color: "#727682",
                  fontFamily: "Montserrat700",
                }}
              >
                355 Players
              </Text>
            </View>
            <View style={styles.chart}>
              <FontAwesome5
                name="chart-area"
                size={14}
                color="#727682"
                style={{ marginTop: 3 }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 14,
                  color: "#727682",
                  fontFamily: "Montserrat700",
                }}
              >
                View Chart
              </Text>
            </View>
          </View>
          <View style={styles.ro2b4}>
            <Progress.Bar
              progress={0.75}
              color="#FE4190"
              borderColor="white"
              width={430}
              height={10}
              style={{
                backgroundColor: "#2DABAD",
                borderRadius: 10,
                marginLeft: 5,
              }}
            />
          </View>
          <View style={styles.ro3box4}>
            <Text
              style={{
                color: "#B5C0C8",
                fontFamily: "Montserrat700",
                marginLeft: 12,
              }}
            >
              232 predicted under
            </Text>
            <Text
              style={{
                color: "#B5C0C8",
                fontFamily: "Montserrat700",
                marginRight: 12,
              }}
            >
              123 predicted over
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  secondaryContainer: {
    flex: 0.5,
    marginLeft: 15,
  },
  gameText: {
    marginLeft: 14,
    marginTop: 40,
  },
  box1: {
    marginTop: 20,
    marginLeft: 19,
    backgroundColor: "#6212b3",
    height: 120,
    width: 440,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  row1: {
    flexDirection: "row",

    marginTop: 19,
    marginLeft: 15,
  },
  text1: {
    flexDirection: "row",
  },
  te2: {
    flexDirection: "row",
  },
  row2: {
    justifyContent: "space-between",
    marginTop: 16,
    marginLeft: 19,
  },
  row3: {
    flexDirection: "row",
  },
  box2: {
    marginTop: 20,
    marginLeft: 25,
    width: 420,
  },
  row1bx2: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  row2ofbox2: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-around",
  },
  box3: {
    marginTop: 20,
    marginLeft: 45,
    width: 420,
  },
  row1ofbx3: {
    justifyContent: "space-around",
  },
  bx3row2: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 14,
  },
  button: {
    backgroundColor: "#452C55",

    borderRadius: 45,
    height: 40,
    width: 147.5,
  },
  button1: {
    backgroundColor: "#6231AD",

    borderRadius: 45,
    height: 40,
    width: 147.5,
  },
  buttonText1: {
    color: "#FFFFFF",
    alignItems: "center",
    fontSize: 14,
    fontFamily: "Montserrat700",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    alignItems: "center",
    fontSize: 14,
    fontFamily: "Montserrat700",
    marginTop: 10,
  },
  insidebutton1: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttoninside: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  box4: {
    marginTop: 20,
    marginLeft: 19,
    backgroundColor: "#F6F3FA",
    height: 120,
    width: 440,
  },
  box4row1: {
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  players: {
    flexDirection: "row",
  },
  chart: {
    flexDirection: "row",
  },
  ro2b4: {
    marginTop: 20,
    height: 15,
  },
  ro3box4: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12.01,
  },
});
