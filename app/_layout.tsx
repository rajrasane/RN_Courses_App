import { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router";

export default function RootLayout() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (showOnboarding) {
      router.replace("/onboarding");
    }
  }, [showOnboarding]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
