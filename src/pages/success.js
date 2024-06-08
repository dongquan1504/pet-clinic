import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Success = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={require("../../assets/success.png")} style={styles.image} />
        <Text style={styles.h1}>SUCCESSFULL!</Text>
        <Text style={{ color: "#fff" }}>
          Thanks for trusting us, we promise to bring the best experience for
          your pet
        </Text>
        <TouchableOpacity
          style={{ ...styles.button, width: "100%" }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: "#fff" }}>Review for us</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ color: "#fff" }}>Back to home</Text>
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
  h1: {
    color: "#0A7FA3",
    fontSize: 25,
    fontWeight: "bold",
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
  box: {
    padding: 30,
    margin: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#0A7FA3",
    borderRadius: 10,
    width: 300,
  },
  image: {
    width: 200,
    height: 120,
  },
});

export default Success;
