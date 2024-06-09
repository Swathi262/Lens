import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/_Models/product.model';
import { ProductService } from 'src/app/_Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products?:Product[];
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
    this.products=[{

        "pid":1,
  
        name:"frame",
  
        price:30
  
        },
  
       {
  
         "pid":2,
  
         name:"lense",
  
         price:100
  
       },
       {
        "pid":3,
        name:"glass",
        price:500
       },
       {
        "pid":4,
        name:"sunglasses",
        price:1000
       }
      ];
  }
  
  private getProducts(){
    this.productService.getProductList().subscribe(data =>{
     this.products=data;
    }
     );
  }
  

  productDetails(){
 
  }
  updateProduct(){

  }
  
  deleteProduct(){
  
  }
  
  
}
