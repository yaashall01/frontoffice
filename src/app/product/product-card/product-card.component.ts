import { Component,Input } from '@angular/core';
import{Product} from '../../models/product';
@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
@Input() product!: Product;


}
