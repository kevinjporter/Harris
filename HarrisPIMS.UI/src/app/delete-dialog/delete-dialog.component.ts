import { Component, Inject, input } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../services/productService';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  templateUrl: './delete-dialog.component.html',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  styleUrl: './delete-dialog.component.css'
})
export class DeleteDialogComponent {
  selectedProductId: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { productId: number, productName: string }, private productService: ProductService) {
    this.selectedProductId = data.productId;
  }

  deleteProduct() {
    this.productService.deleteProduct(this.selectedProductId)
      .subscribe(e => {});
  }
}
