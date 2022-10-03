import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";

import { CadidatesContextProvider } from "./src/context/ProductContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CadidatesContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CadidatesContextProvider>
    </ThemeProvider>
  );
}
