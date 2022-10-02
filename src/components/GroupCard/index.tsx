import React from "react";
import { Container, Title, Items } from "./styles";

import { ButtonIcon } from "../ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import { Product } from "../../screens/Home";
import { ProductParams } from "../../@types/navigation";

type Props = {
  data: Product;
};

export function GroupCard({ data }: Props) {
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

  return (
    <Container>
      <Title>{data.title}</Title>

      <Items>
        <ButtonIcon icon="eye" onPress={() => handleOpenProduct(data)} />
        <ButtonIcon icon="edit" />
        <ButtonIcon icon="trash-2" type="SECONDARY" />
      </Items>
    </Container>
  );
}
