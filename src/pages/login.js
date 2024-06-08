import { StatusBar } from "expo-status-bar";
import { get, ref } from "firebase/database";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import db from "../firebase";

const initializeLoginForm = { phoneNumber: "", password: "" };

const Login = ({ navigation }) => {
  const [loginForm, setLoginForm] = useState(initializeLoginForm);
  const [isErrorSubmit, setIsErrorSubmit] = useState(false);

  const usersRef = ref(db, "users");

  const handleLogin = async () => {
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const user = Object.values(snapshot.val()).find(
            (user) =>
              user.phoneNumber == loginForm.phoneNumber &&
              user.password == loginForm.password
          );
          // console.log(bcrypt.hash(loginForm.password, 10));
          if (user) {
            setIsErrorSubmit(false);
            navigation.navigate("Home");
            // bcrypt.compare(
            //   loginForm.password,
            //   user.password,
            //   function (err, result) {
            //     if (result) {
            //       // Passwords match
            //       const userWithoutPassword = { ...user };
            //       delete userWithoutPassword.password;
            //       localStorage.setItem(
            //         "account",
            //         JSON.stringify(userWithoutPassword)
            //       );
            //       navigation.navigate("Home");
            //     } else {
            //       // Passwords don't match
            //       setError(true);
            //     }
            //   }
            // );
          } else {
            Alert.alert("Error Login", "Invalid phone number or password");
            setIsErrorSubmit(true);
          }
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
      <Image source={require("../../assets/Illu.png")} />
      <View style={styles.main}>
        <Text style={styles.h1}>Panzy miss you!</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Phone number"
            onChangeText={(text) =>
              setLoginForm({ ...loginForm, phoneNumber: text })
            }
            style={{ width: "100%", paddingLeft: 5 }}
            keyboardType="phone-pad"
          />
        </View>
        {!loginForm.phoneNumber && isErrorSubmit && (
          <Text style={{ color: "#F55C94", marginTop: -10 }}>
            This field is required
          </Text>
        )}
        <View style={styles.input}>
          <Icon
            name="lock"
            size={20}
            color="#202020"
            style={{
              borderRightWidth: 1,
              paddingRight: 5,
              borderColor: "#ccc",
            }}
          />
          <TextInput
            style={{ width: "100%", paddingLeft: 5 }}
            keyboardType="text"
            onChangeText={(text) =>
              setLoginForm({ ...loginForm, password: text })
            }
            secureTextEntry={true}
            password={true}
          />
        </View>
        {!loginForm.password && isErrorSubmit && (
          <Text style={{ color: "#F55C94", marginTop: -10, paddingBottom: 15 }}>
            This field is required
          </Text>
        )}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={{ color: "#fff" }}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{ paddingTop: 15 }}>
          No account?{" "}
          <Text
            style={styles.login}
            onPress={() => navigation.navigate("Register")}
          >
            Sign up
          </Text>
        </Text>
      </View>
      <Text
        style={styles.link}
        onPress={() => navigation.navigate("Home")}
        // onPress={() => Linking.openURL("http:/google.com")}
      >
        Maybe later, the cute things need a treatment first!
      </Text>
      <StatusBar style="auto" />
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
  main: {
    alignItems: "center",
  },
  h1: {
    color: "#0A7FA3",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    flexDirection: "row",
    padding: 10,
    width: 300,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    borderRadius: 50,
  },
  login: {
    color: "#69C7E4",
    textDecorationLine: "underline",
  },
  link: {
    color: "#F55C94",
    textDecorationLine: "underline",
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

export default Login;
