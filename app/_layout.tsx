import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useCallback } from "react";
import { Text, StyleSheet, TouchableOpacity, useColorScheme, View } from "react-native";
import { ChevronLeft } from "lucide-react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { GratitudeProvider } from "@/hooks/use-gratitude-store";
import { OnboardingProvider, useOnboarding } from "@/hooks/useOnboardingStore";
import { SobrietyProvider } from "@/hooks/useSobrietyStore";
import { EveningReviewProvider } from "@/hooks/use-evening-review-store";
import { adjustFontWeight } from "@/constants/fonts";
import { useTheme } from "@/hooks/useTheme";
import WelcomeScreen from "@/components/WelcomeScreen";
import CustomSplashScreen from "@/components/CustomSplashScreen";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

function RootLayoutNav() {
  const { isOnboardingComplete, isLoading } = useOnboarding();
  const { colors } = useTheme();

  console.log('RootLayoutNav - isLoading:', isLoading, 'isOnboardingComplete:', isOnboardingComplete);

  // Hide splash screen when app is ready
  const hideSplashScreen = useCallback(async () => {
    try {
      if (!isLoading) {
        console.log('Hiding splash screen');
        await SplashScreen.hideAsync();
      }
    } catch (error) {
      console.log('Error hiding splash screen (iOS 26 beta?):', error);
      // Continue even if splash screen hiding fails
    }
  }, [isLoading]);

  useEffect(() => {
    // Add timeout for iOS 26 beta compatibility
    const timeoutId = setTimeout(() => {
      hideSplashScreen();
    }, 200);
    
    return () => clearTimeout(timeoutId);
  }, [hideSplashScreen]);

  // Add error boundary for iOS 26 beta
  try {
    if (isLoading) {
      console.log('Still loading, showing custom splash screen');
      return <CustomSplashScreen />;
    }

    if (!isOnboardingComplete) {
      console.log('Showing welcome screen');
      return <WelcomeScreen />;
    }

    console.log('Showing main app');

    return (
      <Stack screenOptions={{ 
        headerBackTitle: "",
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.cardBackground,
        },
        headerTitleStyle: {
          fontWeight: adjustFontWeight("600", true),
          color: colors.text,
        },
      }}>
        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            headerShown: false,
            title: "AA Sober Companion"
          }} 
        />
        <Stack.Screen 
          name="terms" 
          options={{ 
            presentation: 'modal',
            title: "Terms of Use"
          }} 
        />
        <Stack.Screen 
          name="privacy" 
          options={{ 
            presentation: 'modal',
            title: "Privacy Policy"
          }} 
        />
      </Stack>
    );
  } catch (error) {
    console.log('Error in RootLayoutNav (iOS 26 beta?):', error);
    // Fallback to a simple loading screen
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <Text>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 0, // Remove extra padding since we handle it in container
  },
  backText: {
    fontSize: 17,
    marginLeft: 4,
  },
});

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <OnboardingProvider>
        <GratitudeProvider>
          <SobrietyProvider>
            <EveningReviewProvider>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <RootLayoutNav />
              </GestureHandlerRootView>
            </EveningReviewProvider>
          </SobrietyProvider>
        </GratitudeProvider>
      </OnboardingProvider>
    </QueryClientProvider>
  );
}