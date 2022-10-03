import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { Alert, ToastAndroid, View } from "react-native";
import { ProductParams, UpdateProductParams } from "../../@types/navigation";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { ProductContext } from "../../context/ProductContext";
import {
  Container,
  Content,
  ContentInfo,
  HeaderView,
  ImageProduct,
  Title,
  TextProduct,
  Description,
  ButtonsContainer,
} from "./styles";

export function Product() {
  const { handleDeleteProduct } = useContext(ProductContext);
  const navigation = useNavigation();
  const route = useRoute();
  const product = route.params as ProductParams;

  // console.log(product);

  function handleGoBack() {
    navigation.goBack();
  }

  function handleDelete(id: string) {
    try {
      handleDeleteProduct(id);
      navigation.goBack();
    } catch (error) {
      ToastAndroid.show(
        "Não foi possivel excluir produto!",
        ToastAndroid.SHORT
      );
    }
  }

  function handleOpenUpdateProduct({
    id,
    title,
    description,
    price,
    stock,
  }: UpdateProductParams) {
    navigation.navigate("updateProduct", {
      id,
      title,
      description,
      price,
      stock,
    });
  }

  async function handleScreenDeleteConfirmation(id: string) {
    Alert.alert(
      "Excluir Produto",
      "Você deseja realmente excluir este produto ?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => handleDelete(id) },
      ],
      { cancelable: false }
    );
  }

  return (
    <Container>
      <HeaderView>
        <ButtonIcon icon="arrow-left" onPress={handleGoBack} />
        <Header title="Produto Selecionado" />
      </HeaderView>

      <Content>
        <ImageProduct
          resizeMode="contain"
          source={{ uri: product.thumbnail }}
        />

        <ContentInfo>
          <Title>{product.title}</Title>
          <TextProduct>R$ {product.price}</TextProduct>
          <TextProduct>Qtde: {product.stock} unidades</TextProduct>
        </ContentInfo>
      </Content>
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextProduct>Desconto: {product.discountPercentage} </TextProduct>
        <TextProduct>Avaliação: {product.rating} </TextProduct>
      </View>
      <Description>{product.description}</Description>

      <ButtonsContainer>
        <Button
          title="Alterar"
          onPress={() => handleOpenUpdateProduct(product)}
        />
        <Button
          title="Excluir"
          type="SECONDARY"
          onPress={() => handleScreenDeleteConfirmation(product.id)}
        />
      </ButtonsContainer>
    </Container>
  );
}
