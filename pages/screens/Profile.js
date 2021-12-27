import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Feather } from "react-native-vector-icons";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";

export default function Profile({ navigation }) {
  return (
    <View style={style.container}>
      <View style={style.container1}>
        <Image source={require("./penico.png")} style={style.icons} />
        <Text style={style.title}>Profile</Text>
        <Feather name="message-square" size={25} style={style.icons1} />
      </View>
      <View style={{ padding: 7, alignItems: "center" }}>
        <Image
          source={{
            uri: "https://media.gqindia.com/wp-content/uploads/2018/05/26-866x956.jpg",
          }}
          style={style.userImage}
        />
        <View style={{ position: "absolute" }}>
          <View style={style.addBtnContainer}>
            <FontAwesome name="edit" size={24} color="black" />
          </View>
          <View>
            <Text style={style.userName}>Jina Simons</Text>
            <Text style={style.userName}>6000 Pts</Text>
            <Text style={style.about}>
              I'm a software developer that has been in the {"\n"}crypto space
              since 2012.And I've seen grow {"\n"}and falter over a period of
              time. Really happy {"\n"} to be here!
            </Text>
            <View style={style.logico}>
              <Entypo name="log-out" size={25}>
                {" "}
                LogOut
              </Entypo>
            </View>
            <View
              style={{
                alignItems: "center",
                marginTop: 30,
                marginBottom: 0,
              }}
            >
              <Image source={require("./starico.png")} style={style.icons3} />
            </View>
            {/* <View style={{
                            position: 'relative',
                        }}>
                            <Image source={require('../images/line.jpg')} style={style.icons4} />
                        </View> */}
            <View style={style.ratingcont}>
              <View style={style.rating}>
                <Text style={{ marginRight: 100, fontSize: 16 }}>
                  Under or Over
                </Text>
                <Text style={style.userName}>Top 5</Text>
              </View>
              <View style={style.rating1}>
                <AntDesign name="arrowup" size={35} color="#04b404">
                  {" "}
                  81%
                </AntDesign>
                <AntDesign name="arrowdown" size={35} color="#DF0101">
                  {" "}
                  -51%
                </AntDesign>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 500,
    width: "100%",
    borderColor: "#ffffff",
  },

  container1: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 15,
  },

  title: {
    color: "#727682",
    fontWeight: "bold",
    fontSize: 25,
    marginRight: 150,
  },

  userImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: "#ffffff",
  },

  userName: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 5,
    letterSpacing: 2,
  },

  addBtnContainer: {
    marginTop: 55,
    backgroundColor: "white",
    marginLeft: "53%",
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "#fff",
    justifyContent: "center",
  },

  addBtn: {
    alignItems: "center",
  },

  icons: {
    height: 30,
    width: 30,
    borderRadius: 50,
    borderColor: "yellow",
    borderWidth: 3,
    marginStart: 0,
    marginRight: 150,
  },

  icons1: {
    marginEnd: 10,
  },

  about: {
    color: "#727682",
    justifyContent: "center",
    width: "100%",
    marginLeft: 60,
    fontSize: 15,
    fontWeight: "bold",
  },

  logico: {
    color: "#727682",
    textAlign: "center",
    fontSize: 9,
    marginTop: 20,
    marginLeft: 150,
  },

  icons3: {
    height: 30,
    width: 26,
    marginBottom: 15,
  },
  // icons4: {
  //     width: '95%',
  //     height: 2,
  //     position: 'relative',
  // },
  ratingcont: {
    width: 450,
    height: 150,
    borderWidth: 1,
    borderColor: "#EEEAF3",
  },
  rating: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  rating1: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
});
