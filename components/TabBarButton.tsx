import { StyleSheet, Text, View } from "react-native";

interface TabBarButtonProps {
  label: string;
  isFocused: boolean;
}

function TabBarButton({ label, isFocused }: TabBarButtonProps) {
  return (
    <View style={[styles.tabBarButton, isFocused && styles.focused]}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

export default TabBarButton;

const styles = StyleSheet.create({
  tabBarButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#0000ff",
    borderRadius: 10,
  },
  focused: {
    backgroundColor: "#000088",
  },
  label: {
    color: "#ffffff",
    fontSize: 14,
  },
});
