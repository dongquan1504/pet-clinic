import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox } from 'react-native';

import Login from "./src/pages/login";
import Register from "./src/pages/register";
import Otp from "./src/pages/otp";
import AskName from "./src/pages/askName";
import AskPassword from "./src/pages/askPassword";
import AskLocal from "./src/pages/askLocal";
import AskNoti from "./src/pages/askNoti";
import Home from "./src/pages/Home";
import Clinic from "./src/pages/clinic";
import Detail from "./src/pages/detail";
import BookClinic from "./src/pages/bookClinic/index";
import Success from "./src/pages/success";
import PetList from "./src/pages/petList";
import PetDetail from "./src/pages/petDetail";
import AdoptShelter from "./src/pages/adoptShelter/index";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />

        {/* clinic flow */}
        <Stack.Screen name="Clinic" component={Clinic} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="BookClinic" component={BookClinic} />
        {/* shelter flow */}
        <Stack.Screen name="PetList" component={PetList} />
        <Stack.Screen name="PetDetail" component={PetDetail} />
        <Stack.Screen name="AdoptShelter" component={AdoptShelter} />

        <Stack.Screen name="Success" component={Success} />
        {/* register flow */}
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="AskName" component={AskName} />
        <Stack.Screen name="AskPassword" component={AskPassword} />
        <Stack.Screen name="AskLocal" component={AskLocal} />
        <Stack.Screen name="AskNoti" component={AskNoti} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

LogBox.ignoreLogs([
  'No native ExponentConstants module found',
  'No native ExpoFirebaseCore module found',
]);