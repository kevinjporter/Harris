import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';

export const routes: Routes = [
  { path: 'view-products', component: ViewProductsComponent },
  { path: 'product-form', component: ProductFormComponent },
  { path: 'edit-product/:productId', component: EditProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
