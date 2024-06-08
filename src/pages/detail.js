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
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Detail = ({ navigation, route }) => {
  const { name, subTitle, address, image, comments, petList } =
    route.params.clinic;

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
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <Text style={styles.h1}>{name}</Text>
        <Text
          style={{
            color: "#3F3F3F",
            paddingTop: 20,
            paddingBottom: 20,
            width: 200,
          }}
        >
          {subTitle}
        </Text>
        <Text style={{ textDecorationLine: "underline", paddingBottom: 30 }}>
          {address}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ color: "#fff" }}>Chat</Text>
          </TouchableOpacity>
          {!petList?.length ? (
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: "#F55C94" }}
              onPress={() =>
                navigation.navigate("BookClinic", {
                  clinic: route.params.clinic,
                })
              }
            >
              <Text style={{ color: "#fff" }}>Book</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: "#F55C94" }}
              onPress={() =>
                navigation.navigate("PetList", {
                  clinic: route.params.clinic,
                })
              }
            >
              <Text style={{ color: "#fff" }}>Adopt</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 30 }}>
        Comments (4.5
        <FontAwesome name="star" size={25} color="#F55C94" />){" "}
      </Text>
      {comments.map((comment) => (
        <View
          key={comment.id}
          style={{
            flexDirection: "row",
            alignItems: "stretch",
            width: 300,
            borderBottomWidth: 1,
            borderColor: "#ccc",
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          <Image source={comment.image} style={styles.avatar} />
          <View>
            <Text style={{ fontWeight: "bold" }}>{comment.name}</Text>
            <Text>{comment.content}</Text>
          </View>
        </View>
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
  card: {
    alignItems: "center",
    width: 300,
    borderWidth: 1,
    borderColor: "#0A7FA3",
    margin: 10,
    borderRadius: 10,
    paddingTop: 40,
    paddingBottom: 40,
  },
  image: {
    borderWidth: 1,
    borderColor: "#0A7FA3",
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  button: {
    width: 100,
    padding: 10,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#0A7FA3",
    borderRadius: 150,
    color: "#fff",
    textAlign: "center",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 10,
  },
});

export default Detail;
