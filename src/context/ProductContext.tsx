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
  DeleteProduct: (id: string) => void;
  AddProduct: (data: {}) => void;
  UpdateProduct: (id: string, data: {}) => void;
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

  async function DeleteProduct(id: string) {
    try {
      const headers = {
        method: "DELETE",
      };
      await api.delete(`/products/${id}`, headers);
      ToastAndroid.show("Produto excluído com sucesso!", ToastAndroid.SHORT);
      // console.log(response.data);
    } catch (err) {
      ToastAndroid.show(
        "Não foi possível excluir produto!",
        ToastAndroid.SHORT
      );
      console.log(err);
    }
  }

  async function AddProduct(data: Object) {
    try {
      let axiosConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await api.post(`/products/add`, data, axiosConfig);

      // console.log(response);
      ToastAndroid.show("Produto Adicionado com sucesso!", ToastAndroid.SHORT);
    } catch (err) {
      console.log(err);
      ToastAndroid.show(
        "Não foi possível adicionar produto!",
        ToastAndroid.SHORT
      );
    }
  }

  async function UpdateProduct(id: string, data: Object) {
    try {
      let axiosConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await api.put(`/products/${id}`, data, axiosConfig);

      ToastAndroid.show("Produto Alterado com sucesso!", ToastAndroid.SHORT);
    } catch (err) {
      console.log(err);
      ToastAndroid.show(
        "Não foi possível Alterar produto!",
        ToastAndroid.SHORT
      );
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
        DeleteProduct,
        AddProduct,
        UpdateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
