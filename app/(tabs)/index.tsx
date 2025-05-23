import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

export default function GlobalViewScreen() {
  return (
    <LinearGradient
      colors={["#162B44", "#070C08"]} // różowy → niebieski
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <Text className="text-white/70 font-bold text-4xl">Earth</Text>
      <Text className="text-white/70 font-bold text-2xl">21 Wed</Text>
    </LinearGradient>
  );
}
