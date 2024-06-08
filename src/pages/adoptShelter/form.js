import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { RadioButton } from "react-native-paper";

import AntDesign from "react-native-vector-icons/AntDesign";

const petOptions = [
  { key: 1, value: "Dog" },
  { key: 2, value: "Cat" },
  { key: 3, value: "Pug" },
  { key: 4, value: "Snake" },
  { key: 5, value: "Crocodie" },
];

const petTypeOptions = [
  { key: 1, value: "Quantity" },
  { key: 2, value: "Normal" },
];

const Form = ({ navigation, clinic, setForm, form, isErrorSubmit }) => {
  const [ready, setReady] = useState("adoption");
  const [experiment, setExperiment] = useState("first");
  const [live, setLive] = useState("alone");
  const [meals, setMeals] = useState("canned");

  useEffect(() => {
    setForm({ ...form, ready, experiment, live, meals });
  }, [ready, experiment, live, meals]);

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
          onPress={() =>
            navigation.navigate("Detail", { clinic: clinic })
          }
        />
        <Text style={styles.h1}>Adoption process</Text>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Contact Information*
      </Text>

      <View style={styles.input}>
        <TextInput
          autoCapitalize
          value={form.name}
          keyboardType="text"
          placeholder="Full Name"
          onChangeText={(text) => setForm({ ...form, name: text })}
          style={{ width: "100%", paddingLeft: 5, height: "100%" }}
        />
      </View>
      {!form.name && isErrorSubmit && (
        <Text style={{ color: "#F55C94" }}>This field is required</Text>
      )}
      <View style={styles.input}>
        <TextInput
          value={form.phone}
          style={{ width: "100%", paddingLeft: 5, height: "100%" }}
          onChangeText={(text) => setForm({ ...form, phone: text })}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
      </View>
      {!form.phone && isErrorSubmit && (
        <Text style={{ color: "#F55C94" }}>This field is required</Text>
      )}
      <View style={styles.input}>
        <TextInput
          value={form.email}
          style={{ width: "100%", paddingLeft: 5, height: "100%" }}
          onChangeText={(text) => setForm({ ...form, email: text })}
          keyboardType="text"
          autoComplete="email"
          placeholder="Email"
        />
      </View>
      {!form.email && isErrorSubmit && (
        <Text style={{ color: "#F55C94" }}>This field is required</Text>
      )}
      <View style={styles.input}>
        <TextInput
          value={form.address}
          style={{ width: "100%", paddingLeft: 5, height: "100%" }}
          onChangeText={(text) => setForm({ ...form, address: text })}
          keyboardType="text"
          autoComplete="addressLine1"
          placeholder="Home Address"
        />
      </View>
      {!form.address && isErrorSubmit && (
        <Text style={{ color: "#F55C94" }}>This field is required</Text>
      )}

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Your pet*
      </Text>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        You’re ready for*
      </Text>
      <RadioButton.Group
        onValueChange={(newValue) => setReady(newValue)}
        value={ready}
      >
        <RadioButton.Item label="Adoption" value="adoption" />
        <RadioButton.Item label="Trial Adoption (2 weeks)" value="2-weeks" />
      </RadioButton.Group>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Previous pets experience*
      </Text>
      <RadioButton.Group
        onValueChange={(newValue) => setExperiment(newValue)}
        value={experiment}
      >
        <RadioButton.Item label="First time to pet" value="first" />
        <RadioButton.Item label="I had pets as a child" value="only" />
        <RadioButton.Item label="I’ve had 1-3 pets" value="some" />
        <RadioButton.Item
          label="I’ve had pets my whole life"
          value="multiple"
        />
      </RadioButton.Group>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Now, you live*
      </Text>
      <RadioButton.Group
        onValueChange={(newValue) => setLive(newValue)}
        value={live}
      >
        <RadioButton.Item label="Alone" value="alone" />
        <RadioButton.Item label="With roommates" value="roommates" />
        <RadioButton.Item label="With relatives" value="relatives" />
      </RadioButton.Group>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Meals for pet will be (Select all that apply)*
      </Text>
      <RadioButton.Group
        onValueChange={(newValue) => setMeals(newValue)}
        value={meals}
      >
        <RadioButton.Item label="Canned food" value="canned" />
        <RadioButton.Item label="Pet treat" value="pet_treat" />
        <RadioButton.Item label="Pet food" value="pet_food" />
        <RadioButton.Item label="Homemade meals" value="homemade" />
      </RadioButton.Group>

      {/* {!form.date && isErrorSubmit && (
        <Text style={{ color: "#F55C94" }}>This field is required</Text>
      )} */}
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
    width: 300,
    borderWidth: 1,
    borderColor: "#0A7FA3",
    alignItems: "center",
    flexDirection: "row",
  },
  selectButton: {
    borderColor: "#0A7FA3",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    margin: 5,
    width: 64,
  },
});

export default Form;
