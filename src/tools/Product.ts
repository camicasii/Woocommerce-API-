import woocommerApi from "./woocommer";

interface TagsAndCategoriesProductProperties{
  id:number //Category or tag ID.
  name:String  //Category or tag name.
  slug:String //Category or tag Islug.
}

interface ImagesProductProperties{
  id:number //Image ID.
  src:string //Image URL.
  name:string //Image name.
  alt:string //	Image alternative text.


}

interface ProductProperties{
  id:number
  name:String
  slug:String
  date_modified:Date
  type:String
  status:String
  description:String
  short_description:String
  price:String
  sale_price:String
  categories:Array<{categori:TagsAndCategoriesProductProperties}>
  tag:Array<{tag:TagsAndCategoriesProductProperties}>
  images:Array<{image:ImagesProductProperties}>
}

class Product {   
    
    api:any;
    constructor() {
     this.api = woocommerApi()
    }
    
    // List products
    async getAllProduct(){
        const res = await this.api.getAsync('products').then(function(result:any) {
            return JSON.parse(result.toJSON().body);
          });        
          return res
    }
    
    // Create a product
    async createNewProduct(product:ProductProperties){
        const res = await this.api.postAsync('products',product).then(function(result:any) {
            return JSON.parse(result.toJSON().body);
          });        
          return res
    }

    // Edit a product
    async updateProduct(idProduct:string,product:ProductProperties){
        const res = await this.api.putAsync(idProduct,product).then(function(result:any) {
            return JSON.parse(result.toJSON().body);
          });        
          return res
    }
    // Delete a product
    async deleteProduct(idProduct:string){
        const res = await this.api.deleteAsync(idProduct,{
            force: true, // Forces to delete instead of move to the Trash
          }).then(function(result:any) {
            return JSON.parse(result.toJSON().body);
          });        
          return res
    }

}


  
  
