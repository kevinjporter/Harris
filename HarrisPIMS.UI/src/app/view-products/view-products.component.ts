import { Component, inject } from '@angular/core';
import { Product } from '../../models/product';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { ProductService } from '../services/productService';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/internal/operators/switchMap';

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
  products$!: Observable<Product[]>;
  selectedProductId = 0;
  readonly columnsToDisplay = ['productName', 'price', 'quantity', 'actions'];
  readonly dialog = inject(MatDialog);

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.refetch.pipe(
      switchMap(() => this.productService.getProducts()))
  }

  openDialog(selectedProductId: number, selectedProductName: string): void {
    this.dialog.open(DeleteDialogComponent, {
      data: { productId: selectedProductId, productName: selectedProductName },
      width: '250px'
    });
  }
}
