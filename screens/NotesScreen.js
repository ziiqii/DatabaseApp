import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function NotesScreen({ navigation }) {
  // create state variable for our notes
  const [notes, setNotes] = useState([
    { title: "walk dog", done: false, id: "0" },
    { title: "water plant", done: false, id: "1" },
  ]);

  function addNote() {
      navigation.navigate("Add Note");
  }

  // this adds the new note button in the header
  useEffect(() => {
    console.log("wot");
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={addNote}>
          <Entypo
            name="new-message"
            size={24}
            color="black"
            style={{ marginRight: 16 }}
          />
        </TouchableOpacity>
      ),
    });
  });

  function renderItem({ item }) {
    return (
      <View
        style={{
          padding: 10,
          paddingTop: 20,
          paddingBottom: 20,
          borderBottomColor: "hotpink",
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ fontSize: 16, textAlign: "left" }}>{item.title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderItem}
        style={{ width: "100%" }}
      />
    </View>
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
