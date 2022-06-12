import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function NotesScreen() {
  return (
    <View style={styles.container}>
      <Text>Notes</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>A</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
