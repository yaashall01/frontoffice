import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/products";
import {ProductService} from "../../services/product.service";


@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {



  productList!: Product[] ;
  constructor(private productSvc: ProductService) { }
  ngOnInit(){
    this.productSvc.getProducts().subscribe((data:Product[])=>{
      this.productList = data;
    });
  }



}

