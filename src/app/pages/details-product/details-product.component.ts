import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/products";

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent {
  productDetails!: Product;
  productId!:string;
  largeImage: string = '';

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      console.log(this.productId)
      this.loadProductDetails(this.productId);
    });
  }

  loadProductDetails(productId: string) {
    this.productService.getProductById(productId).subscribe(
      (product: any) => {
        this.productDetails = product;
        if (product.imgs && product.imgs.length > 0) {
          this.largeImage = product.imgs[0];
        }
      },
      (error) => {
        console.error('Error loading product details', error);
      }
    );
  }
  changeLargeImage(index: number) {
    if (this.productDetails.imgs && this.productDetails.imgs.length > index) {
      this.largeImage = this.productDetails.imgs[index];
    }
  }

}
