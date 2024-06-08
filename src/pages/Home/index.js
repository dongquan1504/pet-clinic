import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import fakeData from "./fakeData";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <AntDesign
          name="search1"
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
          secureTextEntry={true}
          password={true}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.h1}>Hi, My Mate!</Text>
        <Text>Let’s make the cute things feel better</Text>
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Services</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Clinic", { data: fakeData.dataShelter })
          }
        >
          <Image source={require("../../../assets/shelter.png")} />
        </TouchableOpacity>
        <View style={{ position: "absolute", top: 130, left: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#fff" }}>
            SHELTER
          </Text>
          <Text style={{ color: "#fff" }}>
            Adopt a pet, find your cute mate
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Clinic", { data: fakeData.dataClinic })
          }
        >
          <Image source={require("../../../assets/clinic.png")} />
        </TouchableOpacity>
        <View style={{ position: "absolute", top: 305, left: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#fff" }}>
            CLINIC
          </Text>
          <Text style={{ color: "#fff" }}>
            Book for an appointment, ensure pet’s health
          </Text>
        </View>
        {/* <Image source={require("../../../assets/tipForYou.png")} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 28,
    overflowY: "scroll",
    flex: 1,
    backgroundColor: "#fff",
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
});

export default Home;
