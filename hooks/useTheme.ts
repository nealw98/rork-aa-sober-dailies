import { useColorScheme, ColorSchemeName } from 'react-native';
import Colors from '@/constants/colors';

export function useTheme() {
  let colorScheme: ColorSchemeName = 'light'; // Default fallback
  
  try {
    // Wrap useColorScheme in try-catch for iOS 26 beta compatibility
    colorScheme = useColorScheme();
  } catch (error) {
    console.log('useColorScheme error (iOS 26 beta?), defaulting to light:', error);
    colorScheme = 'light';
  }
  
  // Additional safety checks for iOS 26 beta
  if (colorScheme === null || colorScheme === undefined) {
    console.log('useColorScheme returned null/undefined, defaulting to light');
    colorScheme = 'light';
  }
  
  // Ensure colorScheme is a valid string
  if (typeof colorScheme !== 'string') {
    console.log('useColorScheme returned non-string, defaulting to light');
    colorScheme = 'light';
  }
  
  const isDark = colorScheme === 'dark';
  
  return {
    colors: isDark ? Colors.dark : Colors.light,
    isDark,
    colorScheme: colorScheme,
  };
}
