export interface ProductParams {
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

 export interface UpdateProductParams {
   id: string;
   title: string;
   description: string;
   price: string;
   stock: string;
 }
 
export declare global {
   namespace ReactNavigation {
      interface RootParamList {
         home: undefined;
         product: ProductParams;
         addProduct: undefined;
         updateProduct: UpdateProductParams;
      }
   }
}