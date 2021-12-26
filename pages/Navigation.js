import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//screens
import Home from "../pages/screens/Home";
import Leagues from "../pages/screens/Leagues";
import Leaderboard from "../pages/screens/Leaderboard";
import Profile from "../pages/screens/Profile";
import Research from "../pages/screens/Research";

//screen names

const homeName = "Home";
const profileName = "Profile";
const leagueName = "League";
const researchName = "Researc";
const boardName = "Leaderboard";

//tab NavigationContainer

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === profileName) {
              iconName = focused ? "person-sharp" : "person-outline";
            } else if (rn === leagueName) {
              iconName = focused ? "trophy" : "trophy-outline";
            } else if (rn === boardName) {
              iconName = focused ? "stats-chart" : "stats-chart-outline";
            } else if (rn === researchName) {
              iconName = focused ? "search" : "search-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={Home} />

        <Tab.Screen name={leagueName} component={Leagues} />

        <Tab.Screen name={researchName} component={Research} />

        <Tab.Screen name={boardName} component={Leaderboard} />

        <Tab.Screen name={profileName} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
