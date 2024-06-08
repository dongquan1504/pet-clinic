import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";

const Otp = ({ navigation, route }) => {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const inputRef = useRef();
  const maximumCodeLength = 6;
  const boxArray = new Array(maximumCodeLength).fill(0);

  const boxDigit = (_, index) => {
    const emptyInput = "";
    const digit = otpCode[index] || emptyInput;
    const isCurrentValue = index === otpCode.length;
    const isLastValue = index === maximumCodeLength - 1;
    const isCodeComplete = otpCode.length === maximumCodeLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    return (
      <View
        style={
          isInputBoxFocused && isValueFocused
            ? styles.splitBoxesFocused
            : styles.slipBox
        }
        key={index}
      >
        <Text>{digit}</Text>
      </View>
    );
  };

  // const handleOnPress = () => {
  //   setIsInputBoxFocused(true);
  //   inputRef.current.focus();
  // };

  const handleContinue = () => {
    if (isPinReady) {
      route.params.confirmResult
        .confirm(otpCode)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
          navigation.navigate("AskName", {
            phoneNumber: route.params.phoneNumber,
          });
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          console.error(error);
        });
    }
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    setIsPinReady(otpCode.length === maximumCodeLength);
  }, [otpCode]);

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
            onPress={() => navigation.navigate("Register", route.params)}
          />
          <Text style={styles.h1}>Your OTP</Text>
        </View>
        <Text>The OTP will be sent to this number 12345678910</Text>

        <View>
          <Pressable style={styles.splitOTPBoxesContainer}>
            {boxArray.map(boxDigit)}
          </Pressable>
          <TextInput
            style={styles.input}
            value={otpCode}
            onChangeText={setOTPCode}
            maxLength={maximumCodeLength}
            ref={inputRef}
            // onPress={handleOnPress}
            onBlur={handleOnBlur}
            keyboardType="phone-pad"
          />
        </View>
        <StatusBar style="auto" />
        <Text style={styles.link}>Resend OTP</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
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
    width: 300,
    borderWidth: 1,
    borderColor: "#ccc",
    position: "absolute",
    opacity: 0,
  },
  slipBox: {
    borderColor: "#e5e5e5",
    borderWidth: 2,
    borderRadius: 5,
    padding: 12,
    minWidth: 40,
  },
  splitBoxesFocused: {
    borderColor: "#ecdbba",
    backgroundColor: "grey",
  },
  splitOTPBoxesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 300,
    padding: 10,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#0A7FA3",
    borderRadius: 50,
    color: "#fff",
    textAlign: "center",
  },
});

export default Otp;
