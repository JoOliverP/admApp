import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../components/Button';
import { GroupCard } from '../../components/GroupCard';
import { Header } from '../../components/Header';
import { api } from '../../services/api';
import { Container } from './styles';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  discountPercentage: string;
  rating: string;
  stock: string;
  brand: string;
  category:string;
  thumbnail:string;
}

export function Home() {
  const [productsData,setProductsData] = useState<Product[]>([])

  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get('/products')
        setProductsData(response.data.products)  
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts()
  },[])
  // console.log(productsData);
  return (
    <Container>
      <Header title='Produtos' />
      <FlatList
        data={productsData}
        keyExtractor={item => item.id}  
        renderItem={({item}) => (
          <GroupCard  data={item} />
        )}
        
      />
      
      <Button title='Adicionar Produto' />
    </Container>
  );
}