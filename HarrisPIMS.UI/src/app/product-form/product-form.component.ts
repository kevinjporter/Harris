import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../services/productService';

@Component({
  selector: 'app-product-form',
  standalone: true,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
  imports: [ReactiveFormsModule]
})

export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  productDetails: Product;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    this.productDetails = {
      productId: 0,
      productName: "",
      price: 0,
      quantity: 0
    };
  }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      productName: [''],
      price: [''],
      quantity: ['']
    });
  }

  onSubmit(form: FormGroup) {
    this.productDetails = {
      productName: form.value.productName,
      price: form.value.price,
      quantity: form.value.quantity
    };

    this.productService.addProduct(this.productDetails).subscribe(response =>
      this.productForm.reset());
  }
}
