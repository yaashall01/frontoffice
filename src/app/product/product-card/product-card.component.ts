import { Component,Input } from '@angular/core';
import{Product} from '../../models/products';
import {ProductService} from "../../services/product.service";
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  productList!: Product[] ;
  constructor(private productSvc: ProductService) { }
  ngOnInit(){
    this.productSvc.getProducts().subscribe((data:Product[])=>{
      this.productList = data;
    });
  }



}
