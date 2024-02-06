import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./shared/home/home.component";
import {ProductCarouselComponent} from "./product/product-carousel/product-carousel.component";
import {DetailsProductComponent} from "./pages/details-product/details-product.component";

const routes: Routes = [
  {path: '',component: HomeComponent, children: [
    {path: 'product-card', component: ProductCarouselComponent},
  {path: 'textile',component: DetailsProductComponent}]},/*
  {path: 'goodies',component: GoodiesComponent, title: 'UIR-Shop Goodies'},
  {path: 'high-tech',component: GoodiesComponent, title: 'UIR-Shop High-Tech'},*/
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
