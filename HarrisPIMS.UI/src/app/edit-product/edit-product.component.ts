import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../services/productService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
  imports: [ReactiveFormsModule]
})
export class EditProductComponent {
  editProductForm!: FormGroup;
  productDetails: Product;
  productIdFromUrl: number;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.productIdFromUrl = 0;
    this.productDetails = {
      productId: 0,
      productName: "",
      price: 0,
      quantity: 0
    };
  }

  ngOnInit() {

    // read id from url
    this.route.params.subscribe(params => {
      this.productIdFromUrl = Number(params['productId']) ?? 0; 
    });

    this.productService.getProduct(this.productIdFromUrl).subscribe(p => {
      // build form
      this.editProductForm = new FormGroup({
        productName: new FormControl(p.productName, Validators.required),
        price: new FormControl(p.price, Validators.required),
        quantity: new FormControl(p.quantity, Validators.required)
      });
    });
  }

  onSubmit(form: FormGroup) {
    this.productDetails = {
      productId: this.productIdFromUrl,
      productName: form.value.productName,
      price: form.value.price,
      quantity: form.value.quantity
    };

    this.productService.updateProduct(this.productDetails).subscribe(e => { });
  }
}
