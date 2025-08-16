import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { useTheme } from "@/hooks/useTheme";
import { getReflectionForDate } from "@/constants/reflections";
import { Reflection } from "@/types";
import { adjustFontWeight } from "@/constants/fonts";

export default function DailyReflection() {
  const { colors, isDark } = useTheme();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [reflection, setReflection] = useState<Reflection | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    updateReflection(selectedDate);
  }, [selectedDate]);

  const updateReflection = async (date: Date) => {
    setIsLoading(true);
    try {
      const reflectionData = await getReflectionForDate(date);
      setReflection(reflectionData);
    } catch (error) {
      console.error('Error loading reflection:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const navigateDate = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate);
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 1);
    } else {
      newDate.setDate(newDate.getDate() + 1);
    }
    setSelectedDate(newDate);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    loadingText: {
      fontSize: 16,
      color: colors.muted,
    },
    dateContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },
    date: {
      fontSize: 16,
      color: colors.text,
      fontWeight: adjustFontWeight("500"),
    },
    navigationButtons: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    navButton: {
      padding: 8,
      borderRadius: 8,
      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.3)',
    },
    card: {
      backgroundColor: isDark ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
      padding: 24,
      marginBottom: 16,
    },
    cardNavigationContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },
    cardNavButton: {
      flexDirection: "row",
      alignItems: "center",
      padding: 8,
      borderRadius: 8,
      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.3)',
    },
    cardNavText: {
      fontSize: 14,
      color: colors.tint,
      fontWeight: adjustFontWeight("500"),
      marginHorizontal: 4,
    },
    cardHeader: {
      alignItems: "center",
      marginBottom: 16,
    },
    headerDecoration: {
      width: 40,
      height: 3,
      backgroundColor: colors.tint,
      borderRadius: 2,
    },
    title: {
      fontSize: 22,
      fontWeight: adjustFontWeight("bold", true),
      color: colors.text,
      marginBottom: 16,
      textAlign: "center",
      letterSpacing: 0.5,
    },
    quote: {
      fontSize: 18,
      fontStyle: "italic",
      color: colors.text,
      marginBottom: 8,
      lineHeight: 26,
      textAlign: "center",
    },
    source: {
      fontSize: 14,
      color: colors.muted,
      textAlign: "right",
      marginBottom: 16,
      fontWeight: adjustFontWeight("500"),
    },
    divider: {
      height: 1,
      backgroundColor: colors.divider,
      marginVertical: 16,
      opacity: 0.5,
    },
    reflectionText: {
      fontSize: 16,
      color: colors.text,
      lineHeight: 24,
    },
    thoughtTitle: {
      fontSize: 18,
      fontWeight: adjustFontWeight("bold", true),
      color: colors.text,
      marginBottom: 8,
    },
    thought: {
      fontSize: 16,
      color: colors.text,
      lineHeight: 24,
      fontStyle: "italic",
    },
    copyrightContainer: {
      marginTop: 16,
      paddingHorizontal: 16,
    },
    copyrightText: {
      fontSize: 12,
      color: colors.muted,
      textAlign: "center",
      lineHeight: 16,
    },
  });

  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading reflection...</Text>
        </View>
      </View>
    );
  }

  if (!reflection) {
    return (
      <View style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>No reflection found for this date.</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={isDark 
          ? ['rgba(107, 164, 232, 0.2)', 'rgba(76, 175, 80, 0.15)', 'rgba(156, 39, 176, 0.1)']
          : ['rgba(74, 144, 226, 0.3)', 'rgba(78, 205, 196, 0.2)', 'rgba(92, 184, 92, 0.1)']
        }
        style={styles.backgroundGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{formatDate(selectedDate)}</Text>
          <View style={styles.navigationButtons}>
            <TouchableOpacity 
              style={styles.navButton}
              onPress={() => navigateDate('prev')}
              activeOpacity={0.7}
            >
              <ChevronLeft size={20} color={colors.tint} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.navButton}
              onPress={() => navigateDate('next')}
              activeOpacity={0.7}
            >
              <ChevronRight size={20} color={colors.tint} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardNavigationContainer}>
            <TouchableOpacity 
              onPress={() => navigateDate('prev')} 
              style={styles.cardNavButton}
              activeOpacity={0.7}
            >
              <ChevronLeft size={16} color={colors.tint} />
              <Text style={styles.cardNavText}>Yesterday</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={() => navigateDate('next')} 
              style={styles.cardNavButton}
              activeOpacity={0.7}
            >
              <Text style={styles.cardNavText}>Tomorrow</Text>
              <ChevronRight size={16} color={colors.tint} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.cardHeader}>
            <View style={styles.headerDecoration} />
          </View>
          
          <Text style={styles.title}>{reflection.title}</Text>
          <Text style={styles.quote}>"{reflection.quote}"</Text>
          <Text style={styles.source}>{reflection.source}</Text>
          
          <View style={styles.divider} />
          
          <Text style={styles.reflectionText}>{reflection.reflection}</Text>
          
          <View style={styles.divider} />
          
          <Text style={styles.thoughtTitle}>Meditation:</Text>
          <Text style={styles.thought}>{reflection.thought}</Text>
        </View>

        <View style={styles.copyrightContainer}>
          <Text style={styles.copyrightText}>
            Copyright © 1990 by Alcoholics Anonymous World Services, Inc. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
