import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

function NotesScreen() {
  return (
    <View style={styles.container}>
      <Text>Notes</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Notes"
          component={NotesScreen}
          options={{
            title: "Todo",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 24,
            },
            headerStyle: {
              backgroundColor: "orange",
              height: 120,
              borderBottomColor: "#999",
              borderBottomWidth: 2,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc",
    alignItems: "center",
    justifyContent: "center",
  },
});
