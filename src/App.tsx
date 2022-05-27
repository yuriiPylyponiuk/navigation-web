import React from "react";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COmponentOne } from "./COmponentOne";
import { ComponentTwo } from "./ComponentTwo";

const config = {
  screens: {
    Home: "home",
    Details: "details",
  },
};

const linking = {
  prefixes: ["http://localhost:4200/"],
  config,
};

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <div className="App">
      <NavigationContainer linking={linking}>
        <div>
          <Link to={{ screen: "Home" }}>
            <p>ComonentOne</p>
          </Link>
          <Link to={{ screen: "Details" }}>
            <p>ComonentTwo</p>
          </Link>
        </div>
        <Stack.Navigator initialRouteName={"Home"}>
          <Stack.Screen
            options={{ headerShown: false }}
            name={"Home"}
            component={COmponentOne}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name={"Details"}
            component={ComponentTwo}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </div>
  );
}

export default App;
