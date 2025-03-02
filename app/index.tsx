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
    router.replace("/(tabs)");
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
              style={{ width: 300, height: 300, resizeMode: "contain" }}
            />
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 20,
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
            <View style={{ height: 80 }} />
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots (Moved Up for First Two Slides) */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: currentIndex !== slides.length - 1 ? 92.8 : 20, // Move up for first two slides
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

      {/* Get Started Button (Only on last slide) */}
      {currentIndex === slides.length - 1 && (
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <TouchableOpacity
            onPress={handleSkip}
            style={{
              backgroundColor: "#000000",
              paddingVertical: 12,
              paddingHorizontal: 30,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Get Started</Text>
          </TouchableOpacity>
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