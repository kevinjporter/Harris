import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-view-products',
  standalone: true,
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css',
  imports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class ViewProductsComponent {
  products: Product[] = [];
  columnsToDisplay = ['productName', 'price', 'quantity', 'actions'];

  constructor(private http: HttpClient) {
    http.get<Product[]>('http://localhost:5157/api/Products')
      .subscribe(data => {
        this.products = data;
    });
  }
}
