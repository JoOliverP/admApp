import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Button";
import { GroupCard } from "../../components/GroupCard";
import { Header } from "../../components/Header";
import { ProductContext } from "../../context/ProductContext";
import { api } from "../../services/api";
import { Container } from "./styles";

export function Home() {
  const navigation = useNavigation();
  const { productsData } = useContext(ProductContext);

  function handleNavigateProduct() {
    navigation.navigate("addProduct");
  }

  return (
    <Container>
      <Header title="Produtos" />
      <FlatList
        data={productsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GroupCard data={item} />}
      />

      <Button title="Adicionar Produto" onPress={handleNavigateProduct} />
    </Container>
  );
}
