import React, { useContext } from "react";
import { Container, Title, Items } from "./styles";

import { ButtonIcon } from "../ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import { Product, ProductContext } from "../../context/ProductContext";

import { ProductParams, UpdateProductParams } from "../../@types/navigation";
import { Alert, ToastAndroid } from "react-native";
import axios from "axios";

type Props = {
  data: Product;
};

export function GroupCard({ data }: Props) {
  const { handleDeleteProduct } = useContext(ProductContext);
  const navigation = useNavigation();

  function handleOpenProduct({
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  }: ProductParams) {
    navigation.navigate("product", {
      id,
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
    });
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
        { text: "OK", onPress: () => handleDeleteProduct(id) },
      ],
      { cancelable: false }
    );
  }

  return (
    <Container>
      <Title>{data.title}</Title>

      <Items>
        <ButtonIcon icon="eye" onPress={() => handleOpenProduct(data)} />
        <ButtonIcon icon="edit" onPress={() => handleOpenUpdateProduct(data)} />
        <ButtonIcon
          icon="trash-2"
          type="SECONDARY"
          onPress={() => handleScreenDeleteConfirmation(data.id)}
        />
      </Items>
    </Container>
  );
}
