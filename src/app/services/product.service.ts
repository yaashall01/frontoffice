import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/products";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  url: string = 'http://38.242.131.85:8057/api/products'

  constructor( private http: HttpClient ) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}`);
  }

  getProductById(productId: string): Observable<any> {

    return this.http.get(`${this.url}`);
  }


  }
