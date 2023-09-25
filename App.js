// import * as React from "react";
import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
// import * as Font from 'expo-font';
// import Entypo from '@expo/vector-icons/Entypo';
// import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Home from "./screens/admin/Home";
// import Social from "./screens/admin/Social";
// import Members from "./screens/admin/Members";
// import Profile from "./screens/admin/Profile";
import Login from "./screens/admin/Login";

import AdminDashboard from "./screens/admin/AdminDashboard";
import Home from "./screens/admin/Home";
import "react-native-url-polyfill/auto";
import Signup from "./screens/admin/signup";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
// SplashScreen.preventAutoHideAsync();
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const _retiveData = async () => {
    try {
      const data = await AsyncStorage.getItem("isUserLogin");
      console.log("is userLoggedIn",data)
      setIsLogged(data);
    } catch (error) {
      console.warn("error");
    }
  };
  useEffect(() => {
    _retiveData();
  }, []);
  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // Pre-load fonts, make any API calls you need to do here
  //       await Font.loadAsync(Entypo.font);
  //       // Artificially delay for two seconds to simulate a slow loading
  //       // experience. Please remove this if you copy and paste the code!
  //       await new Promise(resolve => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }

  // onLayoutRootView();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogged ? (
          <Stack.Group>
            <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
            {/* <Stack.Screen name="Login" component={Login} /> */}
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
