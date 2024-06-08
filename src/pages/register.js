import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import axios from "axios";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { get, ref } from "firebase/database";
import Icon from "react-native-ico-flags";
import db, { firebaseConfig } from "../firebase";

const Register = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("+84");
  const auth = getAuth();
  const usersRef = ref(db, "users");
  const recaptchaVerifier = useRef(null);

  const handleSignUp = () => {
    if (phoneNumber.length < 12) {
      alert("Please enter a valid phone number");
      return;
    }

    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const user = Object.values(snapshot.val()).find(
            (user) => user.phoneNumber == phoneNumber.substring(3)
          );

          if (!user) {
            signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier.current)
              .then((confirmResult) => {
                // window.confirmationResult = confirmResult;
                navigation.navigate("Otp", { confirmResult, phoneNumber });
              })
              .catch((error) => {
                // Handle any errors here
                console.error(error);
              });
          } else {
            alert("Phone number already exists");
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
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Image source={require("../../assets/Illu.png")} />
      <View style={styles.main}>
        <Text style={styles.h1}>WELCOME TO Panzy!</Text>
        <Text>Enter your phone number to sign up</Text>
        <View style={styles.input}>
          <Icon name="vietnam" />
          <Text
            style={{
              borderRightWidth: 1,
              paddingRight: 5,
              borderColor: "#ccc",
            }}
          >
            +84
          </Text>
          <TextInput
            style={{ width: "100%", paddingLeft: 5 }}
            onChangeText={(text) => setPhoneNumber(`+84${text.substring(1)}`)}
            placeholder="Phone number"
            keyboardType="phone-pad"
          />
        </View>
        <TouchableOpacity style={styles.button} id="sign-in-button" onPress={handleSignUp}>
          <Text style={{ color: "#fff" }}>SIGN UP</Text>
        </TouchableOpacity>
        <Text>
          Already had an account,{" "}
          <Text
            style={styles.login}
            onPress={() => navigation.navigate("Login")}
          >
            Log in
          </Text>
        </Text>
      </View>
      <Text
        style={styles.link}
        // onPress={() => navigation.navigate("Otp",{name: "Otp"})}
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
    padding: 10,
    width: 300,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
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

export default Register;
