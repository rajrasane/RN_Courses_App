import React, { useRef, useState } from "react";
import { View, ScrollView, Dimensions, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from "expo-router";
import Slide from "../components/OnboardingSlide";
import Pagination from "../components/Pagination";
import AuthButtons from "../components/AuthButtons";
import SkipButton from "../components/SkipButton";
import slides from "../data/slideData";

const { width } = Dimensions.get("window");

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
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {currentIndex !== slides.length - 1 && <SkipButton onPress={handleSkip} />}
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {slides.map((slide) => (
            <Slide key={slide.id} {...slide} />
          ))}
        </ScrollView>
        <Pagination currentIndex={currentIndex} />
        {currentIndex === slides.length - 1 && <AuthButtons />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});