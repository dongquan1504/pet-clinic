import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import { format } from "date-fns";
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

const Form = ({ navigation, route, setForm, form, isErrorSubmit }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedPet, setSelectedPet] = useState("");
  const [date, setDate] = useState(format(new Date(), "EEEE, dd/MM/yyyy"));
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = format(selectedDate, "EEEE, dd/MM/yyyy") || date;
    setOpen(false);
    setDate(currentDate);
  };

  useEffect(() => {
    setForm({
      ...form,
      pet: selectedPet,
      petType: selectedValue,
      date: date,
      time: time,
    });
  }, [selectedValue, selectedPet, date, time]);

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
            navigation.navigate("Detail", { clinic: route.params.clinic })
          }
        />
        <Text style={styles.h1}>Clinic Booking</Text>
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
      <SelectList
        boxStyles={{ marginVertical: 10, borderColor: "#0A7FA3" }}
        setSelected={(key) => setSelectedValue(petTypeOptions[key - 1].value)}
        data={petTypeOptions}
      />
      {!form.petType && isErrorSubmit && (
        <Text style={{ color: "#F55C94" }}>This field is required</Text>
      )}
      <SelectList
        boxStyles={{ marginVertical: 10, borderColor: "#0A7FA3" }}
        setSelected={(key) => setSelectedPet(petOptions[key - 1].value)}
        data={petOptions}
      />
      {!form.pet && isErrorSubmit && (
        <Text style={{ color: "#F55C94" }}>This field is required</Text>
      )}
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Booking for a treatment*
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        1. Choose a time slot
      </Text>
      <View style={styles.input}>
        <AntDesign
          name="calendar"
          size={20}
          style={{
            padding: 8,
            borderRightWidth: 1,
            borderColor: "#0A7FA3",
          }}
          color="#0A7FA3"
        />
        <TextInput
          style={{ width: "100%", paddingLeft: 5, height: "100%" }}
          showSoftInputOnFocus={false}
          onPress={() => setOpen(true)}
          value={date}
        />
        {open && (
          <DateTimePicker
            value={date}
            mode={"date"}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      {!form.date && isErrorSubmit && (
        <Text style={{ color: "#F55C94" }}>This field is required</Text>
      )}

      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          width: 300,
        }}
      >
        {[
          "9:00",
          "9:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
          "16:30",
          "17:00",
          "17:30",
        ].map((item) => (
          <TouchableOpacity
            style={{
              ...styles.selectButton,
              backgroundColor: time == item ? "#0A7FA3" : "#fff",
            }}
            onPress={() => setTime(item)}
            key={item}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {!form.time && isErrorSubmit && (
        <Text style={{ color: "#F55C94" }}>This field is required</Text>
      )}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        2. Note
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
