import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotesScreen from "./NotesScreen";

const InnerStack = createStackNavigator();

export default function NotesStack() {
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen
        name="notes"
        component={NotesScreen}
        options={{
          headertitle: "Notes App",
          headerTitleStyle: {
            fontWeight: "bold",
            fontsize: 30,
          },
          headerStyle: {
            height: 120,
            backgroundColor: "yellow",
            borderBottomColor: "hotpink",
            borderbottomwidth: 1,
          },
        }}
      ></InnerStack.Screen>
    </InnerStack.Navigator>
  );
}