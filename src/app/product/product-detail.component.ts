import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IProduct} from "./product";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string;
  id: number;
  product: IProduct;

  constructor(private _router:Router,private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    this.pageTitle = "Product :" + this.id;
    this.product = {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    };
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
