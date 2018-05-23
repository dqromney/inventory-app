import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Product } from "../product.model";

@Component({
  selector: 'product-image',
  templateUrl: `
  <img class="product-image" [src]="product.imageUrl">
  `
})
export class ProductImageComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() { }

  ngOnInit() {
  }

}
