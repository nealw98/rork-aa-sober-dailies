const tintColorLight = "#4A90E2";
const tintColorDark = "#6BA4E8";

const Colors = {
  light: {
    text: "#333333",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    cardBackground: "#f8f9fa",
    accent: "#5CB85C",
    muted: "#6c757d",
    divider: "#e9ecef",
    chatBubbleUser: "rgba(74, 144, 226, 0.3)", // Exact light blue from daily reflection gradient
    chatBubbleBot: "rgba(92, 184, 92, 0.1)", // Exact light green from daily reflection gradient
    chatBubbleGrace: "rgba(186, 85, 211, 0.1)", // Light lavender for Grace
    chatBubbleSalty: "rgba(255, 191, 0, 0.1)", // Light amber for Salty Sam
    border: "#e9ecef",
  },
  dark: {
    text: "#ffffff",
    background: "#121212",
    tint: tintColorDark,
    tabIconDefault: "#666",
    tabIconSelected: tintColorDark,
    cardBackground: "#1e1e1e",
    accent: "#4CAF50",
    muted: "#b0b0b0",
    divider: "#333333",
    chatBubbleUser: "rgba(107, 164, 232, 0.2)", // Darker blue for dark mode
    chatBubbleBot: "rgba(76, 175, 80, 0.15)", // Darker green for dark mode
    chatBubbleGrace: "rgba(156, 39, 176, 0.15)", // Darker lavender for Grace
    chatBubbleSalty: "rgba(255, 193, 7, 0.15)", // Darker amber for Salty Sam
    border: "#333333",
  },
} as const;

export default Colors;