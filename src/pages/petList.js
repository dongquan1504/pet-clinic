import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";

const PetList = ({ navigation, route }) => {
  const { petList } = route.params.clinic;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          size={30}
          color="#202020"
          onPress={() => navigation.navigate("Detail", route.params)}
        />
        <Text style={styles.h1}>Pet List</Text>
        <AntDesign name="filter" size={20} color="#202020" />
      </View>
      <View style={styles.petList}>
        {petList.map((pet) => (
          <TouchableOpacity
            key={pet.name}
            style={styles.pet}
            onPress={() =>
              navigation.navigate("PetDetail", {
                params: route.params,
                petSelected: pet,
              })
            }
          >
            <Image key={pet.name} source={pet.image} style={styles.image} />
            <View style={styles.textBox}>
              <Text style={{ fontWeight: "bold", fontSize: 17, color: "#fff" }}>
                {pet.name}
              </Text>
              <Text style={{ fontSize: 17, color: "#fff" }}>{pet.sex}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  image: {
    borderWidth: 1,
    borderColor: "#0A7FA3",
    borderRadius: 10,
    width: 150,
    height: 150,
  },
  petList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  pet: {
    alignItems: "center",
    margin: 10,
  },
  textBox: {
    position: "absolute",
    bottom: 5,
    paddingLeft: 10,
    justifyContent: "space-between",
    width: 150,
  },
});

export default PetList;
