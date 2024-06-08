import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";

const BookClinic = ({ form, setIsFilled, clinic, petSelected }) => {
  const { name, address } = clinic;

  return (
    <>
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
          onPress={() => setIsFilled(false)}
        />
        <Text style={styles.h1}>Clinic Booking</Text>
      </View>
      <View style={styles.box}>
        <View style={{ flexDirection: "row", fontWeight: "bold" }}>
          <Text
            style={{
              borderRightWidth: 2,
              paddingRight: 5,
              marginRight: 5,
              fontWeight: "bold",
            }}
          >
            {form.name}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            {form.phone}
          </Text>
        </View>
        <Text style={{ color: "#ccc" }}>{form.address}</Text>
        <Text
          style={{
            color: "#0A7FA3",
            textAlign: "center",
            fontSize: 20,
            borderColor: "#0A7FA3",
            borderTopWidth: 1,
            paddingTop: 5,
            marginTop: 5,
            borderStyle: "dashed",
          }}
        >
          Your adoption
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>Location: </Text>
          <Text>{name}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>Address: </Text>
          <Text>{address}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>Adopt: </Text>
          <Text>{petSelected.name}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>Detail: </Text>
          <Text>
          {petSelected.sex} - {petSelected.Health} Health - {petSelected.Size} -{" "}
            {petSelected.breed}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Note
        </Text>
        <View style={styles.input}>
          <TextInput
            multiline
            style={{ width: "100%", paddingLeft: 5, height: "100%" }}
            keyboardType="text"
            autoComplete="note"
            placeholder="Note for the clinic"
          />
        </View>
      </View>
      <View style={styles.box}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Checkout details
        </Text>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text>Standard service price </Text>
          <Text>300.000 VND</Text>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text>Quantity of pet</Text>
          <Text>1</Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            borderTopWidth: 2,
            borderTopColor: "#0A7FA3",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Total </Text>
          <Text style={{ fontWeight: "bold" }}>300.000 VND</Text>
        </View>
      </View>
      <Text style={styles.eror}>*Have a careful look before the checkout</Text>
      <Text style={styles.eror}>
        *The price will be higher due to medicines or tests
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
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
    width: "100%",
    borderWidth: 1,
    borderColor: "#0A7FA3",
    alignItems: "center",
    flexDirection: "row",
  },
  eror: {
    color: "red",
    fontSize: 12,
    fontWeight: "bold",
  },
  box: {
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: "#0A7FA3",
    borderRadius: 10,
    width: 300,
  },
});

export default BookClinic;
