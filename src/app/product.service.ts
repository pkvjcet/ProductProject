import { Injectable } from '@angular/core';
import { IProduct } from './productlist/product.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:3000/products");   
  }
  newProduct(item){
    return this.http.post("http://localhost:3000/insert",{"product":item}).subscribe(data=>{
      console.log(data)
    })
  }
}
