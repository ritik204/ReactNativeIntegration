import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

const HelloWorld = (arg) => {
  console.log("arg", arg?.NAME);
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.hello}>React Native App</Text>
        <Text style={styles.hello}>{arg.KEY}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centers vertically
    alignItems: "center", // Centers horizontally
    backgroundColor: "#F5FCFF",
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
  },
  hello: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "green",
  },
});

AppRegistry.registerComponent("MyReactNativeApp", () => HelloWorld);
