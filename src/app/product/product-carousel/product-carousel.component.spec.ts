import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarouselComponent } from './product-carousel.component';

describe('ProductCardComponent', () => {
  let component: ProductCarouselComponent;
  let fixture: ComponentFixture<ProductCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCarouselComponent]
    });
    fixture = TestBed.createComponent(ProductCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
