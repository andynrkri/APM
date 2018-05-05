import {Injectable} from "@angular/core";
import {IProduct} from "./product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class ProductService {

  private _productUrl = 'http://127.0.0.1:8887/products/products.json';

  constructor(private _httpClient: HttpClient) {
  }

  getProducts(): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(this._productUrl);
  }

  errorHandler(err: HttpErrorResponse) {
    return Observable.throw(err.message);
  }

}
