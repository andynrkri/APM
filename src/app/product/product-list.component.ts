import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ProductService} from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product list";
  imageWidth: number = 50;
  showImage: boolean = false;
  errorMessage: string;

  filteredProducts: IProduct[];
  productsList: IProduct[];

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.productsList;
  }

  constructor(private _productService: ProductService) {
  }

  ngOnInit(): void {
    console.log('Product list - OnInit');
    this._productService.getProducts().subscribe(products => {
      this.productsList = products;
      this.filteredProducts = this.productsList;
    }, error => this.errorMessage = <any>error);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  private performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.productsList.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle += message;
  }

}

