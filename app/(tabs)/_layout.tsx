import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import { useCallback } from "react";

// Icon mapping for maintainability
const tabIcons: Record<string, any> = {
  index: require("../../assets/icons/home.png"),
  courses: require("../../assets/icons/courses.png"),
  messages: require("../../assets/icons/messages.png"),
  profile: require("../../assets/icons/profile.png"),
};

export default function Layout() {
  // Move useCallback inside the function
  const getTabOptions = useCallback(({ route }: { route: { name: string } }) => {
    const iconSource = tabIcons[route.name];
    const tabName = route.name === "index" ? "Home" : route.name.charAt(0).toUpperCase() + route.name.slice(1);

    return {
      tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
        <View style={{ alignItems: "center", justifyContent: "center",marginTop : -10 }}>
          <Image
            source={iconSource}
            style={{
              width: 24,
              height: 24,
              resizeMode: "contain",
              tintColor: focused ? "black" : color,
            }}
          />
          <Text
            style={{
              color: focused ? "#2C47B9" : color,
              fontSize: 11,
              fontWeight: "600",
              marginTop: 4,
              textAlign: "center",
              minWidth: 60,
              flexWrap: "nowrap",
              height: 18,
            }}
          >
            {tabName}
          </Text>
        </View>
      ),
      tabBarActiveTintColor: "black",
      tabBarInactiveTintColor: "gray",
      tabBarShowLabel: false,
      tabBarPressOpacity: 1,
      tabBarPressColor: 'transparent',
      tabBarStyle: {
        height: 61,
        paddingTop: 19,
        backgroundColor: "#fff",
        borderTopWidth: 0.7,
        elevation: 8,
      },
    };
  }, []);

  return (
    <Tabs screenOptions={getTabOptions}>
      {["index", "courses", "messages", "profile"].map((screen) => (
        <Tabs.Screen key={screen} name={screen} options={{ headerShown: false }} />
      ))}
    </Tabs>
  );
}
