import {
  ButtonsContainer,
  Container,
  FormContainer,
  Fields,
  HeaderView,
  Text,
} from "./styles";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
} from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { api } from "../../services/api";

export function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigation = useNavigation();

  async function handleAddProduct() {
    const data = {
      name,
      description,
      price,
      quantity,
    };

    try {
      let axiosConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await api.post(`/products/add`, data, axiosConfig);

      console.log(response);
      ToastAndroid.show("Produto Adicionado com sucesso!", ToastAndroid.SHORT);
      setName("");
      setPrice("");
      setDescription("");
      setQuantity("");
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
              <Input value={name} onChangeText={setName} />

              <Text>Preço</Text>
              <Input value={price} onChangeText={setPrice} />

              <Text>Descrição</Text>
              <Input value={description} onChangeText={setDescription} />

              <Text>Quantidade</Text>
              <Input value={quantity} onChangeText={setQuantity} />
            </Fields>
            <ButtonsContainer>
              <Button title="Adicionar" onPress={handleAddProduct} />
              <Button
                title="Cancelar"
                type="SECONDARY"
                onPress={handleGoBack}
              />
            </ButtonsContainer>
          </FormContainer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
