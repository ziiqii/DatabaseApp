import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("notes.db");

export default function NotesScreen({ navigation, route }) {
  function refreshNotes() {
    db.transaction((tx) => {
      tx.executeSql(
        "select * from notes",
        null,
        (txObj, { rows: { _array } }) => setNotes(_array),
        (txObj, error) => console.log("Error", error)
      );
    });
  }

  // app does this when this NotesScreen is first mounted
  useEffect(() => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS
        notes
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        done INT);`
        );
      },
      null,
      refreshNotes
    );
  }, []);

  // create state variable for our notes
  const [notes, setNotes] = useState([]);

  function addNote() {
    navigation.navigate("Add Note");
  }

  function deleteNote(id) {
    db.transaction((tx) => {
      tx.executeSql(`DELETE FROM notes WHERE id=${id}`)
    }, null, refreshNotes);
  }
  
  useEffect(() => {
    if (route.params?.text) {
      db.transaction(
        (tx) => {
          tx.executeSql("INSERT INTO notes (done, title) VALUES (0, ?)", [
            route.params.text,
          ]);
        },
        null,
        refreshNotes
      );
    }
  }, [route.params?.text]); //optional chaining

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
            style={{ marginRight: 16}}
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
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16, textAlign: "left" }}>{item.title}</Text>
        <TouchableOpacity onPress={() => deleteNote(item.id)}>
          <Ionicons
            name="trash"
            size={16}
            color="#944" />
        </TouchableOpacity>
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
