import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  total = 0;
  myShoppingCart: Product[] = [];
  products: Product[] = [];
  today = new Date(2021, 1, 21);

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
