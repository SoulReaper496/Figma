import * as React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image
            source={require("./icon.png")}
            style={{ width: 60, height: 60, marginTop: 30, marginLeft: 40 }}
          />
        </View>
        <View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              marginRight: 230,
              color: "#333333",
            }}
          >
            First Stripe Earned
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 15,

              color: "#727682",
            }}
          >
            Top 10% of highest spending {"\n"} players in a month
          </Text>
        </View>
      </View>

      {/*2*/}
      <View style={styles.container}>
        <View>
          <Image
            source={require("./icon.png")}
            style={{ width: 60, height: 60, marginTop: 30, marginLeft: 40 }}
          />
        </View>
        <View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              marginRight: 282,
              color: "#333333",
            }}
          >
            Born Winner
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 15,

              color: "#727682",
            }}
          >
            Top 10% of highest spending {"\n"} players in a month
          </Text>
        </View>
      </View>

      {/*3*/}

      <View style={styles.container}>
        <View>
          <Image
            source={require("./icon.png")}
            style={{ width: 60, height: 60, marginTop: 30, marginLeft: 40 }}
          />
        </View>
        <View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              marginRight: 205,
              color: "#333333",
            }}
          >
            Trader of the Month
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 15,

              color: "#727682",
            }}
          >
            Won 7 under-over games in a {"\n"} row
          </Text>
        </View>
      </View>

      {/*4*/}
      <View style={styles.container}>
        <View>
          <Image
            source={require("./icon.png")}
            style={{ width: 60, height: 60, marginTop: 30, marginLeft: 40 }}
          />
        </View>
        <View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              marginRight: 285,
              color: "#333333",
            }}
          >
            Rising Star
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 15,

              color: "#727682",
            }}
          >
            Top 10% of highest spending {"\n"} players in a month
          </Text>
        </View>
      </View>

      {/*5*/}
      <View style={styles.container}>
        <View>
          <Image
            source={require("./icon.png")}
            style={{ width: 60, height: 60, marginTop: 30, marginLeft: 40 }}
          />
        </View>
        <View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              marginRight: 305,
              color: "#333333",
            }}
          >
            Jackpot
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 15,

              color: "#727682",
            }}
          >
            Top 10% of highest spending {"\n"} players in a month
          </Text>
        </View>
      </View>

      {/*6*/}
      <View style={styles.container}>
        <View>
          <Image
            source={require("./icon.png")}
            style={{ width: 60, height: 60, marginTop: 30, marginLeft: 40 }}
          />
        </View>
        <View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              marginRight: 270,
              color: "#333333",
            }}
          >
            Impossible
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 15,

              color: "#727682",
            }}
          >
            Top 10% of highest spending {"\n"} players in a month
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 150,
    justifyContent: "space-between",
  },
});
