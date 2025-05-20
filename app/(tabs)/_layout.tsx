import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";

function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Global",
          tabBarIcon: () => <AntDesign name="earth" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="satelite-list"
        options={{
          title: "Satelites",
          tabBarIcon: () => (
            <MaterialIcons name="satellite-alt" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => (
            <Ionicons name="settings-outline" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabLayout;
