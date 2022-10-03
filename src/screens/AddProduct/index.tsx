// import {
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableWithoutFeedback,
// } from "react-native";
// import { Button } from "../../components/Button";
// import { ButtonIcon } from "../../components/ButtonIcon";
// import { Header } from "../../components/Header";
// import { Input } from "../../components/Input";

// import {
//   ButtonsContainer,
//   Container,
//   FormContainer,
//   Fields,
//   HeaderView,
//   Text,
// } from "./styles";

// export function AddProduct() {
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <Container>
//           <HeaderView>
//             <ButtonIcon icon="arrow-left" />
//             <Header title="Adicionar Produto" />
//           </HeaderView>
//           <FormContainer>
//             <Fields>
//               <Text>Nome</Text>
//               <Input />

//               <Text>Preço</Text>
//               <Input />

//               <Text>Descrição</Text>
//               <Input />

//               <Text>Quantidade</Text>
//               <Input />
//             </Fields>
//             <ButtonsContainer>
//               <Button title="Alterar" />
//               <Button title="Excluir" type="SECONDARY" />
//             </ButtonsContainer>
//           </FormContainer>
//         </Container>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// }

import {
  ButtonsContainer,
  Container,
  FormContainer,
  Fields,
  HeaderView,
  Text,
} from "./styles";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

export function AddProduct() {
  const navigation = useNavigation();

  async function handleSubmit() {
    try {
      console.log("teste");
    } catch (err) {
      console.log(err);
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <HeaderView>
            <ButtonIcon icon="arrow-left" onPress={handleGoBack} />
            <Header title="Adicionar Produto" />
          </HeaderView>

          <FormContainer>
            <Fields>
              <Text>Nome</Text>
              <Input
                placeholder="Digite o nome do produto"
                placeholderTextColor="#7C7C8A"
              />

              <Text>Preço</Text>
              <Input
                placeholder="Digite o preço do produto"
                placeholderTextColor="#7C7C8A"
              />

              <Text>Descrição</Text>
              <Input
                placeholder="Digite a descrição do produto"
                placeholderTextColor="#7C7C8A"
              />

              <Text>Quantidade</Text>
              <Input
                placeholder="Digite o quantidade do produto"
                keyboardType="numeric"
                placeholderTextColor="#7C7C8A"
              />
            </Fields>
            <ButtonsContainer>
              <Button title="Adicionar" onPress={handleSubmit} />
              <Button title="Excluir" type="SECONDARY" />
            </ButtonsContainer>
          </FormContainer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
