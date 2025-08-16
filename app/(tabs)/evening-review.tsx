import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import ScreenContainer from '@/components/ScreenContainer';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/hooks/useTheme';

export default function EveningReview() {
  const { colors, isDark } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    gradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    content: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 16,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      color: colors.muted,
      textAlign: 'center',
    },
  });

  return (
    <ScreenContainer>
      <Stack.Screen options={{ title: 'Evening Review' }} />
      <LinearGradient
        colors={isDark 
          ? ['rgba(107, 164, 232, 0.2)', 'rgba(76, 175, 80, 0.15)']
          : ['rgba(74, 144, 226, 0.3)', 'rgba(92, 184, 92, 0.1)']
        }
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Evening Review</Text>
        <Text style={styles.subtitle}>
          Nightly inventory based on AA's 'When We Retire at Night' guidance
        </Text>
        <Text style={styles.subtitle}>
          Dark mode support implemented! 🌙
        </Text>
      </View>
    </ScreenContainer>
  );
}

