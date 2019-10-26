import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { IProduct } from '../productlist/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor( private productService:ProductService) { }
  productItem=new IProduct(null,null,null,null,null,null,null,null);

  ngOnInit() {
  }

  AddProduct(){
    this.productService.newProduct(this.productItem);
    alert("success");
  }
  

}
