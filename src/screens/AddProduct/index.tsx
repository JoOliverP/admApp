import {
  ButtonsContainer,
  Container,
  FormContainer,
  Fields,
  HeaderView,
  Text,
  ErrorText,
} from "./styles";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";

import { ProductContext } from "../../context/ProductContext";

export function AddProduct() {
  const { AddProduct } = useContext(ProductContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const [errorName, setErrorName] = useState("");
  const [errorPrice, setErrorPrice] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorQuantity, setErrorQuantity] = useState("");

  const navigation = useNavigation();

  async function handleAddProduct() {
    if (name === "") {
      setErrorName("O campo nome é obrigatório!");
      return;
    }
    if (price === "") {
      setErrorPrice("O campo preço é obrigatório!");
      return;
    }
    if (description === "") {
      setErrorDescription("O campo descrição é obrigatório!");
      return;
    }
    if (quantity === "") {
      setErrorQuantity("O campo quantidade é obrigatório!");
      return;
    }

    const data = {
      name,
      description,
      price,
      quantity,
    };
    AddProduct(data);
    setName("");
    setErrorName("");
    setPrice("");
    setErrorPrice("");
    setDescription("");
    setErrorDescription("");
    setQuantity("");
    setErrorQuantity("");
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
              {errorName && <ErrorText>{errorName}</ErrorText>}
              <Text>Preço</Text>
              <Input
                value={price}
                keyboardType="numeric"
                onChangeText={setPrice}
              />
              {errorPrice && <ErrorText>{errorPrice}</ErrorText>}

              <Text>Descrição</Text>
              <Input value={description} onChangeText={setDescription} />
              {errorDescription && <ErrorText>{errorDescription}</ErrorText>}

              <Text>Quantidade</Text>
              <Input
                keyboardType="numeric"
                value={quantity}
                onChangeText={setQuantity}
              />
              {errorQuantity && <ErrorText>{errorQuantity}</ErrorText>}
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
