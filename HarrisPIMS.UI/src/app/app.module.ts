import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ProductFormComponent } from './product-form/product-form.component';
import { provideRouter } from '@angular/router';
import { ViewProductsComponent } from './view-products/view-products.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewProductsComponent,
    ProductFormComponent,
  ],
  providers: [
    provideHttpClient(
      withFetch(),      
    ),
    provideRouter(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
