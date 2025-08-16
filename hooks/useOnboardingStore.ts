import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import createContextHook from '@nkzw/create-context-hook';

const ONBOARDING_KEY = 'sober_dailies_onboarding_complete';

export const [OnboardingProvider, useOnboarding] = createContextHook(() => {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Add timeout for iOS 26 beta compatibility
    const timeoutId = setTimeout(() => {
      checkOnboardingStatus();
    }, 100); // Small delay to ensure React Native is fully initialized
    
    return () => clearTimeout(timeoutId);
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      console.log('Checking onboarding status...');
      
      // For iOS 26 beta, be more defensive with AsyncStorage
      try {
        // Add timeout for AsyncStorage operations
        const statusPromise = AsyncStorage.getItem(ONBOARDING_KEY);
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('AsyncStorage timeout')), 3000)
        );
        
        const status = await Promise.race([statusPromise, timeoutPromise]) as string | null;
        console.log('AsyncStorage status:', status);
        setIsOnboardingComplete(status === 'true');
      } catch (storageError) {
        console.log('AsyncStorage error (iOS 26 beta?), skipping onboarding:', storageError);
        // Skip onboarding if AsyncStorage fails (common in preview/beta)
        setIsOnboardingComplete(true);
      }
    } catch (error) {
      console.log('Error checking onboarding status:', error);
      // Default to skipping onboarding if there's an error
      setIsOnboardingComplete(true);
    } finally {
      setIsLoading(false);
      console.log('Onboarding check complete');
    }
  };

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem(ONBOARDING_KEY, 'true');
      setIsOnboardingComplete(true);
    } catch (error) {
      console.log('Error saving onboarding status:', error);
      // Even if saving fails, mark as complete to prevent infinite loops
      setIsOnboardingComplete(true);
    }
  };

  return {
    isOnboardingComplete,
    isLoading,
    completeOnboarding,
  };
});