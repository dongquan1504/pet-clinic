import { get, push, ref, set } from "firebase/database";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import db from "../firebase";

const AskPassword = ({ navigation, route }) => {
  const usersRef = ref(db, "users");
  const [password, setPassword] = useState("");

  const handleCreateAccount = () => {
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const newUserRef = push(usersRef);
          set(newUserRef, { ...route.params, password: password });

          navigation.navigate("AskLocal");
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
          <AntDesign
            name="arrowleft"
            size={30}
            color="#202020"
            onPress={() => navigation.navigate("AskName")}
          />
          <Text style={styles.h1}>And your password?</Text>
        </View>
        <Text>Enter your password to continue</Text>

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          password={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Text>*Password must contain at least 8 characters and numbers </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (password.length >= 8) {
            handleCreateAccount();
          } else {
            alert("Password must contain at least 8 characters and numbers");
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

export default AskPassword;
