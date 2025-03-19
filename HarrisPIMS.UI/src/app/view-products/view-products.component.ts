import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Product } from '../../models/product';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-view-products',
  standalone: true,
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css',
  imports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule
  ]
})
export class ViewProductsComponent {
  products: Product[] = [];
  selectedProductId = 0;
  readonly columnsToDisplay = ['productName', 'price', 'quantity', 'actions'];
  readonly dialog = inject(MatDialog);

  constructor(private http: HttpClient) {
    this.getProductData();
  }

  getProductData() {
    this.http.get<Product[]>('http://localhost:5157/api/Products')
      .subscribe(data => {
        this.products = data;
      });
  }

  openDialog(selectedProductId: number, selectedProductName: string): void {
    this.dialog.open(DeleteDialogComponent, {
      data: { productId: selectedProductId, productName: selectedProductName },
      width: '250px'
    });
  }
}
