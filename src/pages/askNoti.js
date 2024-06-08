import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AskLocal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.h1}>May we give you a notification...</Text>
        <Image source={require("../../assets/stuffMan.png")} />

        <Text style={{ textAlign: "center" }}>
          In future, we will send you additional{"\n"}information that will help us
          improve the app{"\n"}and enhance your experience.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ color: "#fff" }}>Get Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 28,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  h1: {
    color: "#0A7FA3",
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    width: 300,
    padding: 10,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#0A7FA3",
    borderRadius: 150,
    color: "#fff",
    textAlign: "center",
  },
});

export default AskLocal;
