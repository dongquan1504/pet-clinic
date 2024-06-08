import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Checkout from "./Checkout";
import Form from "./form";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  address: "",
  pet: "",
  petType: "",
  date: "",
  time: "",
  note: "",
};

const BookClinic = ({ navigation, route }) => {
  const [form, setForm] = useState(initialForm);
  const [isFilled, setIsFilled] = useState(false);
  const [isErrorSubmit, setIsErrorSubmit] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        {isFilled ? (
          <Checkout
            clinic={route.params.clinic}
            setIsFilled={setIsFilled}
            form={form}
          />
        ) : (
          <Form
            route={route}
            navigation={navigation}
            setForm={setForm}
            form={form}
            isErrorSubmit={isErrorSubmit}
          />
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (isFilled) {
            navigation.navigate("Success");
          } else {
            if (
              form.name &&
              form.phone &&
              form.email &&
              form.address &&
              form.pet &&
              form.petType &&
              form.date &&
              form.time
            ) {
              setIsFilled(true);
              setIsErrorSubmit(false);
            } else {
              setIsErrorSubmit(true);
            }
          }
        }}
      >
        <Text style={{ color: "#fff" }}>{!isFilled ? "Book" : "Checkout"}</Text>
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

export default BookClinic;
