import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';

/**
 * @ProductList: A component for rendering all ProductRows and storing the currently selected Product
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

  /**
   * Event that selects a currentProduct.
   *
   * @param {Product} product selected
   */
  clicked ( product: Product ): void {
    this.currentProduct = product;
    this.onProductSelected.emit ( product );
  }

  /**
   * Determine if product is the current Product selected.
   *
   * @param {Product} product
   * @returns {boolean} true if product's sku matches the currentProduct's sku, false otherwise
   */
  isSelected ( product: Product ): boolean {
    if ( !product || !this.currentProduct ) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
