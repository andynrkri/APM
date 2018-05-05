import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ProductListComponent} from "./product/product-list.component";
import {FormsModule} from "@angular/forms";
import {ConvertToSpacePipe} from "./shared/convert-to-spaces.pipe";
import {StarComponent} from "./shared/star.component";
import {HttpClientModule} from "@angular/common/http";
import {ProductDetailComponent} from './product/product-detail.component';
import {WelcomeComponent} from "./home/welcome.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent, ProductListComponent, ConvertToSpacePipe, StarComponent, ProductDetailComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(
      [
        {path: 'welcome', component: WelcomeComponent},
        {path: 'products', component: ProductListComponent},
        {path: 'product/:id', component: ProductDetailComponent},
        {path: '', redirectTo: 'welcome', pathMatch: 'full'},
        {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
