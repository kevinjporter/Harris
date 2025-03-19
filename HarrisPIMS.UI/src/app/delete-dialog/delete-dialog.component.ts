import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, input, Output } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: { productId: number, productName: string }, private http: HttpClient) {
    this.http = http;
    this.selectedProductId = data.productId;
  }

  deleteProduct() {
    this.http.delete(`http://localhost:5157/api/Products?productId=${this.selectedProductId}`)
      .subscribe(data => {
      });
  }
}
