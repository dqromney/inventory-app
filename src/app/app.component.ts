import { Component, EventEmitter } from '@angular/core';
import { Product } from "./product.model";

/**
 * @InventoryApp: the top-level component for our application
 */
@Component ( {
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
  products: Array<Product>;

  constructor () {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99),
      new Product (
        'INCOMM-REDPEN',
        'Sleek InComm Silver Red Pen Swag',
        '/assets/images/products/pen.jpg',
        [ 'Office', 'Supplies', 'Writing Instruments' ],
        19.99
      ),
      new Product (
        'INCOMM-GLASSCLOTH',
        'Red Micro-fiber InComm Glass Cloth Swag',
        '/assets/images/products/glass-cloth.jpg',
        [ 'Office', 'Supplies', 'Micro-fiber' ],
        2.99
      ),
      new Product (
        'INCOMM-CANHOLDER',
        'Red InComm Soda Can holder Swag',
        '/assets/images/products/cup-holder.jpg',
        [ 'Travel', 'Supplies', 'Cup Holder' ],
        3.99
      ),
      new Product (
        'INCOMM-FRIDGEMAGNET',
        'Black Fridge Magnet Clip Swag',
        '/assets/images/products/fridge-magnet.jpg',
        [ 'Kitchen', 'Appliances', 'Fridge Magnets' ],
        1.99
      )
    ];
  }

  productWasSelected ( product: Product ): void {
    console.log ( 'Product clicked: ', product );
  }

}
