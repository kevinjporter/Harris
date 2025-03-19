import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ViewProductsComponent } from './view-products/view-products.component';

export const routes: Routes = [
  { path: 'view-products', component: ViewProductsComponent },
  { path: 'product-form', component: ProductFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
