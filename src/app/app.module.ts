import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import { ProductCarouselComponent } from './product/product-carousel/product-carousel.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CarouselModule,
    TagModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
