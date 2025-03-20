import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
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
  newProduct: Product = {
      productName: '',
      price: 0,
      quantity: 0
  };

  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      productName: [''],
      price: [''],
      quantity: ['']
    });
  }

  onSubmit(form: FormGroup) {
    this.newProduct = {
      productName: form.value.productName,
      price: form.value.price,
      quantity: form.value.quantity
    };

    this.productService.addProduct(this.newProduct).subscribe(response =>
      this.productForm.reset());
  }
}
