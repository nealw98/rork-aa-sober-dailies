import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ChevronDown, ChevronRight } from "lucide-react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useFocusEffect } from 'expo-router';

import { useTheme } from "@/hooks/useTheme";
import { aaPrayers } from "@/constants/bigbook";
import { adjustFontWeight } from "@/constants/fonts";
import ScreenContainer from "@/components/ScreenContainer";

export default function PrayersScreen() {
  const { colors, isDark } = useTheme();
  const { prayer } = useLocalSearchParams();
  const [expandedPrayer, setExpandedPrayer] = useState<number | null>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const prayerRefs = useRef<{ [key: number]: View | null }>({});
  const prayerPositions = useRef<{ [key: number]: number }>({});

  // Track if we came from a deep link or tab navigation
  const isFromDeepLink = useRef(false);
  
  // Reset expanded prayer when screen comes into focus via tab navigation
  useFocusEffect(
    useCallback(() => {
      // If we're not coming from a deep link, always reset to collapsed state
      if (!isFromDeepLink.current) {
        setExpandedPrayer(null);
        // Scroll to top
        setTimeout(() => {
          scrollViewRef.current?.scrollTo({ y: 0, animated: true });
        }, 100);
      }
      // Reset the deep link flag after handling
      isFromDeepLink.current = false;
    }, [])
  );

  useEffect(() => {
    if (prayer) {
      // Mark that we came from a deep link
      isFromDeepLink.current = true;
      
      const prayerParam = prayer.toString().toLowerCase();
      const prayerIndex = aaPrayers.findIndex(p => {
        const title = p.title.toLowerCase();
        return title.includes(prayerParam) || 
               (prayerParam === 'morning' && title.includes('morning')) ||
               (prayerParam === 'evening' && title.includes('evening'));
      });
      if (prayerIndex !== -1) {
        setExpandedPrayer(prayerIndex);
        // Scroll to the prayer after a short delay to ensure the component is rendered
        setTimeout(() => {
          scrollToPrayer(prayerIndex);
        }, 100);
      }
    }
  }, [prayer]);

  const scrollToPrayer = (index: number) => {
    const position = prayerPositions.current[index];
    if (position !== undefined && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: Math.max(0, position - 20), animated: true });
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    backgroundGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    scrollContainer: {
      flex: 1,
    },
    contentContainer: {
      padding: 16,
      paddingBottom: 40,
    },
    header: {
      marginBottom: 24,
    },
    title: {
      fontSize: 28,
      fontWeight: adjustFontWeight("bold", true),
      color: colors.text,
      marginBottom: 8,
      textAlign: "center",
    },
    subtitle: {
      fontSize: 16,
      color: colors.muted,
      textAlign: "center",
      marginBottom: 8,
    },
    prayerCard: {
      backgroundColor: isDark ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.6)',
      borderRadius: 16,
      marginBottom: 16,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.3)',
    },
    prayerHeader: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      justifyContent: "space-between",
    },
    prayerTitle: {
      fontSize: 18,
      fontWeight: adjustFontWeight("600", true),
      color: colors.text,
    },
    prayerContent: {
      padding: 16,
      paddingTop: 0,
      borderTopWidth: 1,
      borderTopColor: colors.divider,
    },
    prayerText: {
      fontSize: 16,
      color: colors.text,
      lineHeight: 24,
      marginBottom: 16,
    },
    italicText: {
      fontStyle: 'italic',
    },
    prayerSource: {
      fontSize: 14,
      color: colors.muted,
      textAlign: "right",
      fontStyle: "italic",
    },
    copyrightContainer: {
      marginTop: 24,
      paddingHorizontal: 16,
      paddingBottom: 16,
    },
    copyrightText: {
      fontSize: 11,
      color: colors.muted,
      textAlign: "center",
      lineHeight: 16,
    },
  });

  return (
    <ScreenContainer style={styles.container}>
      <LinearGradient
        colors={isDark 
          ? ['rgba(107, 164, 232, 0.2)', 'rgba(76, 175, 80, 0.15)']
          : ['rgba(74, 144, 226, 0.3)', 'rgba(92, 184, 92, 0.1)']
        }
        style={styles.backgroundGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 1]}
      />
      
      <ScrollView 
        ref={scrollViewRef}
        style={styles.scrollContainer} 
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.header}>
          <Text style={styles.title}>AA Prayers</Text>
          <Text style={styles.subtitle}>Essential prayers for recovery and reflection</Text>
        </View>
        
        {aaPrayers.map((prayer, index) => (
          <View 
            key={index} 
            style={styles.prayerCard}
            ref={(ref) => { prayerRefs.current[index] = ref; }}
            onLayout={(event) => {
              const { y } = event.nativeEvent.layout;
              prayerPositions.current[index] = y;
            }}
          >
            <TouchableOpacity
              style={styles.prayerHeader}
              onPress={() => setExpandedPrayer(expandedPrayer === index ? null : index)}
              testID={`prayer-${index}`}
              activeOpacity={0.7}
            >
              <Text style={styles.prayerTitle}>{prayer.title}</Text>
              {expandedPrayer === index ? (
                <ChevronDown size={20} color={colors.muted} />
              ) : (
                                  <ChevronRight size={20} color={colors.muted} />
              )}
            </TouchableOpacity>
            
            {expandedPrayer === index && (
              <View style={styles.prayerContent}>
                {prayer.title === "Morning Prayer" ? (
                  <View>
                    <Text style={[styles.prayerText, styles.italicText]}>As I begin this day, I ask my Higher Power:</Text>
                    <Text style={styles.prayerText}>{prayer.content.split('As I begin this day, I ask my Higher Power:')[1]}</Text>
                  </View>
                ) : prayer.title === "Evening Prayer" ? (
                  <View>
                    <Text style={[styles.prayerText, styles.italicText]}>As this day closes:</Text>
                    <Text style={styles.prayerText}>{prayer.content.split('As this day closes:')[1]}</Text>
                  </View>
                ) : (
                  <Text style={styles.prayerText}>{prayer.content}</Text>
                )}
                {prayer.source && <Text style={styles.prayerSource}>— {prayer.source}</Text>}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </ScreenContainer>
  );
}

