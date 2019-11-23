import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import NewPatientFormScreen from "../screens/NewPatientFormScreen";
// import LoginScreen from "../screens/LoginScreen";
// import AssetScreen from "../screens/AssetScreen";
// import ClaimScreen from "../screens/ClaimsScreen";
// import ExampleCamera from "../screens/ExampleCamera";
// import ClaimFormScreen from "../screens/ClaimsFormScreen";
// import ProfileScreen from "../screens/ProfileScreen";
// import AssetCamera from "../screens/AssetCameraScreen";
// import SystemsScreen from "../screens/SystemsScreen";
// import ResultScreen from "../screens/Result"

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      // Login: { screen: LoginScreen },
      Main: { screen: HomeScreen },
      NewPatient: { screen: NewPatientFormScreen},
      // Asset: { screen: AssetScreen },
      // Claims: { screen: ClaimScreen },
      // ExampleCamera: { screen: ExampleCamera },
      // ClaimForm: { screen: ClaimFormScreen },
      // Profile: { screen: ProfileScreen },
      // AssetCamera: {screen: AssetCamera},
      // Systems: { screen: SystemsScreen },
      // Results: {screen: ResultScreen}
    },
    {
      initialRouteName: "NewPatient"
    }
  )
);