import { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    image: require("../assets/images/slide1.png"),
    title: "Free study materials for you",
    description: "Access a variety of free resources to support your learning journey.",
  },
  {
    id: 2,
    image: require("../assets/images/slide2.png"),
    title: "Learn coding at your own pace",
    description: "Enroll in structured courses and enhance your coding skills step by step.",
  },
  {
    id: 3,
    image: require("../assets/images/slide3.png"),
    title: "Create a personal study plan",
    description: "Plan your learning effectively and stay on track with your goals.",
  },
];

export default function Onboarding() {
  const scrollRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleSkip = () => {
    scrollRef.current?.scrollTo({ x: width * (slides.length - 1), animated: true });
  };  

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <SafeAreaView  style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* Skip Button (Hidden on last slide) */}
      {currentIndex !== slides.length - 1 && (
        <TouchableOpacity
          onPress={handleSkip}
          style={{ position: "absolute", top: 50, right: 20, zIndex: 1 }}
        >
          <Text style={{ color: "gray", fontSize: 16 }}>Skip</Text>
        </TouchableOpacity>
      )}

      {/* Scrollable Onboarding Screens */}
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide, index) => (
          <View
            key={slide.id}
            style={{
              width,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
            <Image
              source={slide.image}
              style={{ width: 260, height: 260, resizeMode: "contain" }}
            />
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 50,
              }}
            >
              {slide.title}
            </Text>
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                color: "gray",
                marginTop: 10,
              }}
            >
              {slide.description}
            </Text>

            {/* Extra Space to Keep Alignment */}
            <View style={{ height: 60 }} />
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots (Moved Up for First Two Slides) */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: currentIndex !== slides.length - 1 ? 98 : 20, // Move up for first two slides
        }}
      >
        {slides.map((_, index) => (
          <View
            key={index}
            style={{
              width: currentIndex === index ? 12 : 6,
              height: 6,
              borderRadius: 3,
              backgroundColor: currentIndex === index ? "#000000" : "#D3D3D3",
              marginHorizontal: 4,
            }}
          />
        ))}
      </View>

      {/* Login & Register Buttons (Only on last slide) */}
      {currentIndex === slides.length - 1 && (
  <View style={{ alignItems: "center", marginBottom: 30 }}>
    <View style={{ flexDirection: "row", justifyContent: "center", gap: 15 }}>
      <TouchableOpacity
        onPress={() => router.push("/login")}
        style={{
          backgroundColor: "#000",
          paddingVertical: 14,
          paddingHorizontal: 40,
          borderRadius: 12,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 5, // For Android shadow
        }}
      >
        <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/register")}
        style={{
          backgroundColor: "#f8f9fa",
          paddingVertical: 14,
          paddingHorizontal: 30,
          borderRadius: 12,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 5, // For Android shadow
        }}
      >
        <Text style={{ color: "black", fontSize: 17, fontWeight: "600" }}>Register</Text>
      </TouchableOpacity>
    </View>
  </View>
)}



    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})