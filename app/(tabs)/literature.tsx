import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Book, ChevronRight } from "lucide-react-native";
import { LinearGradient } from 'expo-linear-gradient';
import ScreenContainer from "@/components/ScreenContainer";
import { useTheme } from "@/hooks/useTheme";
import { adjustFontWeight } from "@/constants/fonts";

interface LiteratureOption {
  id: string;
  title: string;
  description: string;
  route: string;
}

const literatureOptions: LiteratureOption[] = [
  {
    id: "bigbook",
    title: "Alcoholics Anonymous",
    description: "The basic textbook for the AA program.",
    route: "/bigbook"
  },
  {
    id: "twelve-and-twelve",
    title: "Twelve Steps and Twelve Traditions",
    description: "In-depth exploration of the Steps and Traditions",
    route: "/twelve-and-twelve"
  }
];

export default function LiteratureScreen() {
  const { colors, isDark } = useTheme();
  
  const handleOptionPress = (route: string) => {
    router.push(route as any);
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
    content: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: adjustFontWeight('bold', true),
      color: colors.text,
      marginBottom: 8,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      color: colors.muted,
      textAlign: 'center',
      marginBottom: 32,
    },
    optionsContainer: {
      gap: 16,
    },
    optionCard: {
      backgroundColor: isDark ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
      padding: 20,
      borderWidth: 1,
      borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.3)',
    },
    optionContent: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    optionIcon: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.3)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    optionText: {
      flex: 1,
    },
    optionTitle: {
      fontSize: 18,
      fontWeight: adjustFontWeight('600', true),
      color: colors.text,
      marginBottom: 4,
    },
    optionDescription: {
      fontSize: 14,
      color: colors.muted,
      lineHeight: 20,
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
      
      <View style={styles.content}>
        <Text style={styles.title}>AA Literature</Text>
        <Text style={styles.subtitle}>
          Access the foundational texts of Alcoholics Anonymous
        </Text>
        
        <View style={styles.optionsContainer}>
          {literatureOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.optionCard}
              onPress={() => handleOptionPress(option.route)}
              activeOpacity={0.7}
              testID={`literature-option-${option.id}`}
            >
              <View style={styles.optionContent}>
                <View style={styles.optionIcon}>
                  <Book size={24} color={colors.tint} />
                </View>
                <View style={styles.optionText}>
                  <Text style={styles.optionTitle}>{option.title}</Text>
                  <Text style={styles.optionDescription}>{option.description}</Text>
                </View>
                <ChevronRight size={20} color={colors.muted} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScreenContainer>
  );
}

