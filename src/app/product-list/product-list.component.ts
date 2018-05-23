import { Component, EventEmitter, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

/**
 * @ProductList: A component for rendering all ProductRows and
 * storing the currently selecte Product
 */
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  /**
   * @input productList - the Array<Product> or Product[] passed to us
   */
  @Input() productList : Array<Product>;

  /**
   * @output onProductSelected - outputs the current Product whenever a new Product is selected
   */
  @Output() onProductSelected: EventEmitter<Product>;

  /**
   * @property currentProduct - local state containing the currently select `Product`
   */
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

}
