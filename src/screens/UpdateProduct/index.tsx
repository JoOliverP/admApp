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
} from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext, useState } from "react";
import { UpdateProductParams } from "../../@types/navigation";
import { ProductContext } from "../../context/ProductContext";

export function UpdateProduct() {
  const { UpdateProduct } = useContext(ProductContext);
  const route = useRoute();
  const product = route.params as UpdateProductParams;

  const [name, setName] = useState(product.title);
  const [price, setPrice] = useState(String(product.price));
  const [description, setDescription] = useState(product.description);
  const [quantity, setQuantity] = useState(String(product.stock));

  const navigation = useNavigation();

  async function HandleUpdateProduct() {
    const data = {
      name,
      description,
      price,
      quantity,
    };

    UpdateProduct(product.id, data);
    navigation.goBack();
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
              <Button title="Atualizar" onPress={HandleUpdateProduct} />
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
