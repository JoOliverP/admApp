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
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { api } from "../../services/api";
import { UpdateProductParams } from "../../@types/navigation";

export function UpdateProduct() {
  const route = useRoute();
  const product = route.params as UpdateProductParams;

  const [name, setName] = useState(product.title);
  const [price, setPrice] = useState(String(product.price));
  const [description, setDescription] = useState(product.description);
  const [quantity, setQuantity] = useState(String(product.stock));

  const navigation = useNavigation();

  async function handleUpdateProduct() {
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
      const response = await api.put(
        `/products/${product.id}`,
        data,
        axiosConfig
      );

      ToastAndroid.show("Produto Alterado com sucesso!", ToastAndroid.SHORT);
      navigation.goBack();
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
            <Header title="Atualizar Produto" />
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
              <Button title="Adicionar" onPress={handleUpdateProduct} />
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
