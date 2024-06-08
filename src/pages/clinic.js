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

const Home = ({ navigation, route }) => {
  const { data } = route.params;

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
      {/* list clinic shop */}
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Near you</Text>
        <AntDesign name="filter" size={20} color="#202020" />
      </View>
      {data.map((clinic) => (
        <TouchableOpacity
          key={clinic.id}
          onPress={() => navigation.navigate("Detail", { clinic })}
        >
          <View style={styles.card}>
            <Image source={clinic.image} style={styles.image} />
            <View
              style={{
                paddingLeft: 10,
                justifyContent: "space-between",
                width: 225,
              }}
            >
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  {clinic.name}
                </Text>
                <Text>{clinic.description}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>{clinic.rating}</Text>
                <Text>{clinic.distance}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
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
    // alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
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
  card: {
    borderWidth: 1,
    borderColor: "#0A7FA3",
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  image: {
    borderWidth: 1,
    borderColor: "#0A7FA3",
    borderRadius: 10,
    width: 100,
    height: 100,
  },
});

export default Home;
