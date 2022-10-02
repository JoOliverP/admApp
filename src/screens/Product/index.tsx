import { useNavigation, useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { ProductParams } from "../../@types/navigation";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
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
  const navigation = useNavigation();
  const route = useRoute();
  const product = route.params as ProductParams;

  // console.log(product);

  function handleGoBack() {
    navigation.goBack();
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
        <Button title="Alterar" />
        <Button title="Excluir" type="SECONDARY" />
      </ButtonsContainer>
    </Container>
  );
}
