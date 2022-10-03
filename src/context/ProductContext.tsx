import { createContext, ReactNode, useEffect, useState } from "react";
import { ToastAndroid } from "react-native";
import { api } from "../services/api";

interface ProductsContextProviderProps {
  children: ReactNode;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  discountPercentage: string;
  rating: string;
  stock: string;
  brand: string;
  category: string;
  thumbnail: string;
  isDeleted?: boolean;
}

interface ProductsContextType {
  productsData: Product[];
  handleDeleteProduct: (id: string) => void;
}

export const ProductContext = createContext({} as ProductsContextType);

export function CadidatesContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [productsData, setProductsData] = useState<Product[]>([]);

  async function fetchProducts() {
    try {
      const response = await api.get("/products");
      setProductsData(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }

  const headers = {
    method: "DELETE",
  };

  async function handleDeleteProduct(id: string) {
    try {
      const response = await api.delete(`/products/${id}`, headers);
      ToastAndroid.show("Produto exluído com sucesso!", ToastAndroid.SHORT);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  // console.log(productsData);
  return (
    <ProductContext.Provider
      value={{
        productsData,
        handleDeleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
