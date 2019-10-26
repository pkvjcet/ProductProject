import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  providers: [ProductService]
})
export class ProductlistComponent implements OnInit {
  pageTitle:String="Product List ";
  imageWidth: number=50;
  imageMargin: number=2;


  products:IProduct[];


  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((response)=>{
      this.products=JSON.parse(JSON.stringify(response))
      console.log(this.products)
    })
  }
  
}
