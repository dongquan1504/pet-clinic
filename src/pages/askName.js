import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import Icon from "react-native-vector-icons/AntDesign";

const AskName = ({ navigation, route }) => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon
            name="arrowleft"
            size={30}
            color="#202020"
            onPress={() => navigation.navigate("Otp", route.params)}
          />
          <Text style={styles.h1}>What is your name?</Text>
        </View>
        <Text>Enter your name to continue</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setName(text)}}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (name.length > 0) {
            navigation.navigate("AskPassword", {
              phoneNumber: route.params.phoneNumber.substring(3),
              name: name,
              areaCode: "84",
            });
          } else {
            alert("Please enter your name");
          }
        }}
      >
        <Text style={{ color: "#fff" }}>Continue</Text>
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
    fontSize: 30,
    fontWeight: "bold",
  },
  link: {
    textDecorationLine: "underline",
  },
  input: {
    marginVertical: 10,
    height: 42,
    borderRadius: 10,
    width: 300,
    borderWidth: 1,
    borderColor: "#0A7FA3",
    paddingLeft: 10,
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

export default AskName;
