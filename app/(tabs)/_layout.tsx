import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconSource;

          if (route.name === "index") {
            iconSource = require("../../assets/icons/home.png");
          } else if (route.name === "courses") {
            iconSource = require("../../assets/icons/courses.png");
          } else if (route.name === "messages") {
            iconSource = require("../../assets/icons/messages.png");
          } else if (route.name === "profile") {
            iconSource = require("../../assets/icons/profile.png");
          }

          return (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 60,
              }}
            >
              <Image
                source={iconSource}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: "contain",
                  tintColor: focused ? "black" : color, // Black when active
                }}
              />
              <Text
                style={{
                  color: focused ? "black" : color, // Black when active
                  fontSize: 12,
                  fontWeight: "600",
                  marginTop: 4,
                  textAlign: "center",
                  minWidth: 60,
                  flexWrap: "nowrap",
                  height: 18,
                }}
              >
                {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
              </Text>
            </View>
          );
        },
        tabBarActiveTintColor: "black", // Black for active tab
        tabBarInactiveTintColor: "gray", // Optional: Gray for inactive tabs
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 78,
          paddingTop: 19,
          paddingBottom: 18,
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 8,
        },
        
      })}
    >
      <Tabs.Screen name="index" options={{ headerShown : false }} />
      <Tabs.Screen name="courses" options={{ headerShown : false }} />
      <Tabs.Screen name="messages" options={{ headerShown : false }} />
      <Tabs.Screen name="profile" options={{ headerShown : false }} />
    </Tabs>
  );
}
