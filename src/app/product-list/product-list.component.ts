import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  pageTitle : string = 'Product List';
  imageWidth : number = 30;
  imageMargin : number =5;
  showImage : boolean =true;
  errorMessage: string;

  
  filteredProducts : IProduct[];
  _listFilter: string;
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  } 
  toggleImage() : void {
    this.showImage = !this.showImage;
  }
  onRatingClicked(message: string): void {
    console.log("Message : ", message);
    this.pageTitle = 'Product List: ' + message;
  }
  products : IProduct[]= [ ]; 
 
  constructor(private _productService: ProductService) {    
   }
  ngOnInit(): void {
    this._productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
                error => this.errorMessage = <any>error);
 }

}

