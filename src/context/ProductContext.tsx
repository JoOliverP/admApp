import { createContext, ReactNode, useEffect, useState } from "react";

import Toast from "react-native-simple-toast";
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
  idsProduct: String[];
}

export const ProductContext = createContext({} as ProductsContextType);

export function CadidatesContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [idsProduct, setIdsProduct] = useState<String[]>([]);

  async function fetchProducts() {
    try {
      const response = await api.get("/products");

      let filteredResponse: Product[] = [];

      response.data.products.map((product: Product) => {
        if (!idsProduct.includes(product.id)) {
          filteredResponse.push(product);
        }
      });
      // console.log(filteredResponse);

      setProductsData(filteredResponse);
    } catch (error) {
      console.log(error);
    }
  }

  async function DeleteProduct(id: string) {
    try {
      const headers = {
        method: "DELETE",
      };
      const response = await api.delete(`/products/${id}`, headers);
      // ToastAndroid.show("Produto excluído com sucesso!", ToastAndroid.SHORT);
      Toast.show("O produto foi excluído.");
      setIdsProduct([...idsProduct, id]);
      // console.log(response.data);
    } catch (err) {
      Toast.show("Não foi possível excluir produto!");

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
      Toast.show("Produto Adicionado com sucesso!");
    } catch (err) {
      console.log(err);
      Toast.show("Não foi possível adicionar produto!");
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

      Toast.show("Produto Alterado com sucesso!");
    } catch (err) {
      console.log(err);
      Toast.show("Não foi possível Alterar produto!");
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [idsProduct]);
  // console.log(productsData);
  return (
    <ProductContext.Provider
      value={{
        productsData,
        DeleteProduct,
        AddProduct,
        UpdateProduct,
        idsProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
