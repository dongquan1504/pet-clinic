import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const PetDetail = ({ navigation, route }) => {
  const { petSelected, params } = route.params;

  const renderTag = ({ text, value, icon }) => (
    <View style={styles.box}>
      {icon}
      {/* <View style={styles.textBox}> */}
      <Text style={{ fontWeight: "bold", fontSize: 17 }}>{text}</Text>
      <Text style={{ fontSize: 17 }}>{value}</Text>
      {/* </View> */}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          size={30}
          color="#202020"
          onPress={() => navigation.navigate("PetList", params)}
        />
        <Text style={styles.h1}>Pet's Detail</Text>
        <AntDesign name="filter" size={20} color="#202020" />
      </View>
      <ScrollView>
        <View style={styles.detailBox}>
          <Image
            key={petSelected.name}
            source={petSelected.image}
            style={styles.image}
          />
          <View style={styles.textBox}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              {petSelected.name}
            </Text>
            <Text style={{ fontSize: 17 }}>{petSelected.description}</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>About me</Text>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            {renderTag({
              text: "Sex",
              value: petSelected.sex,
              icon:
                petSelected.sex === "Female" ? (
                  <MaterialCommunityIcons
                    name="gender-female"
                    size={20}
                    color="#FB81AD"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="gender-male"
                    size={20}
                    color="#0A7FA3"
                  />
                ),
            })}
            {renderTag({
              text: "Age",
              value: `${petSelected.Age} years old`,
              icon: (
                <MaterialCommunityIcons
                  name="calendar"
                  size={20}
                  color="#FB81AD"
                />
              ),
            })}
            {renderTag({
              text: "Health",
              value: petSelected.Health,
              icon: (
                <MaterialCommunityIcons
                  name="cards-heart-outline"
                  size={20}
                  color="#FB81AD"
                />
              ),
            })}
          </View>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            {renderTag({
              text: "Size",
              value: petSelected.Size,
              icon: <Entypo name="ruler" size={20} color="#FB81AD" />,
            })}
            {renderTag({
              text: "Breed",
              value: petSelected.breed,
              icon: <MaterialIcons name="category" size={20} color="#FB81AD" />,
            })}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("AdoptShelter", route.params);
        }}
      >
        <Text style={{ color: "#fff" }}>Adopt Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 28,
    overflowY: "scroll",
    backgroundColor: "#fff",
    flex: 1,
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
  detailBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  pet: {
    alignItems: "center",
    margin: 10,
  },
  textBox: {
    paddingLeft: 10,
    justifyContent: "space-between",
    flex: 1,
  },
  infoBox: {
    margin: 10,
  },
  box: {
    margin: 7,
    borderWidth: 2,
    borderColor: "#0A7FA3",
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 10,
    flex: 1,
  },
  button: {
    width: 300,
    padding: 10,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#0A7FA3",
    borderRadius: 150,
    color: "#fff",
    margin: "auto",
    textAlign: "center",
  },
});

export default PetDetail;
