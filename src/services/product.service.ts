import {productList} from "../db/db";
import {Product} from "../model/product.model";

export const getAllProducts = ():Product[]=>{
    // Logic to get all products
    return productList;
}
export const saveProduct = (product:Product):Product=>{
    productList.push(product);
    return product;
}
export const getProductById = (id:number):Product|undefined=>{
    // Logic to get product by ID
    return productList.find(product => product.id === id);
}
export const updateProduct = (id:number, updatedProduct:Product):Product|undefined=>{
    const index = productList.findIndex(product => product.id === id);
    if(index !== -1){
        productList[index] = updatedProduct;
        return updatedProduct;
    }
    return undefined;
}
export const deleteProduct = (id:string):boolean=>{
    const index = productList.findIndex(product => product.id === id);
    if(index !== -1){
        productList.splice(index, 1);
        return true;
    }
    return false;
}