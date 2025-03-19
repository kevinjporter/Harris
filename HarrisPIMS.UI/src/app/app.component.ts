import { Component, inject, Injectable } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Product Inventory Management System';
}
