import { NgModule } from '@angular/core';
import {ProductListComponent} from "./product-list.component";
import {ConvertToSpacePipe} from "../shared/convert-to-spaces.pipe";
import {ProductDetailComponent} from "./product-detail.component";
import {RouterModule} from "@angular/router";
import {ProductGaurdService} from "./product-gaurd.service";
import {ProductService} from "./product.service";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule, RouterModule.forChild(
      [
        {path: 'products', component: ProductListComponent},
        {path: 'product/:id', canActivate: [ProductGaurdService], component: ProductDetailComponent}
      ]), SharedModule
  ],
  declarations: [ ProductListComponent, ConvertToSpacePipe, ProductDetailComponent],
  providers:[ProductService, ProductGaurdService]
})
export class ProductModule { }
