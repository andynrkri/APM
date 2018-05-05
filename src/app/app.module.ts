import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ProductListComponent} from "./product/product-list.component";
import {FormsModule} from "@angular/forms";
import {ConvertToSpacePipe} from "./shared/convert-to-spaces.pipe";
import {StarComponent} from "./shared/star.component";
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailComponent } from './product/product-detail.component';
import {WelcomeComponent} from "./home/welcome.component";


@NgModule({
  declarations: [
    AppComponent, ProductListComponent, ConvertToSpacePipe,StarComponent, ProductDetailComponent,WelcomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}