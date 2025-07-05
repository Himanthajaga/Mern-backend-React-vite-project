import { Request, Response } from 'express';
import * as productService from '../services/product.service';
export const getAllProducts = (req:Request, res:Response) => {
//     ctrl+alt+T to wrap in try catch
try{
    const products = productService.getAllProducts();
    res.status(200).json(products);
}catch(error) {
    console.log('Error retrieving products:', error);
    res.status(500).json({ message: 'Error retrieving products', error });
  }
}
export const saveProduct = (req:Request, res:Response) => {

}
export const getProduct = (req:Request, res:Response) => {

}
export const updateProduct = (req:Request, res:Response) => {

}
export const deleteProduct = (req:Request, res:Response) => {

}