import { Component,Input } from '@angular/core';
import{Product} from '../../models/product';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
@Input() product!: Product;

  products = [
    //generate 10 products
    {id: 1, name: 'Product 1', price: 100, description: 'This is product 1 description', img: 'https://via.placeholder.com/150'},
    {id: 2, name: 'Product 2', price: 200, description: 'This is product 2 description', img: 'https://via.placeholder.com/150'},
    {id: 3, name: 'Product 3', price: 300, description: 'This is product 3 description', img: 'https://via.placeholder.com/150'},
    {id: 4, name: 'Product 4', price: 400, description: 'This is product 4 description', img: 'https://via.placeholder.com/150'},
    {id: 5, name: 'Product 5', price: 500, description: 'This is product 5 description', img: 'https://via.placeholder.com/150'},
  ];
}
