import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule
  ],
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Product Inventory Management System';
  products: Product[] = [];
  columnsToDisplay = ['productName', 'price', 'quantity', 'actions'];

  constructor(private http: HttpClient) {
    http.get<Product[]>('http://localhost:5157/api/Products').subscribe(data => {
      this.products = data;
    });
  }
}
