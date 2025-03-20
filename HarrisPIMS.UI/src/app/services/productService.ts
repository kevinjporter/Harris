import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, tap, throwError } from "rxjs";
import { Product } from "../../models/product";

@Injectable({ providedIn: 'root' })

export class ProductService {
  private readonly refetchProducts = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }

  get refetch() {
    return this.refetchProducts.asObservable();
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:5157/api/Products')
      .pipe(
        catchError(error => {
          console.error('Problem retrieving products:', error);
          return throwError(() => new Error('Oops! Something went wrong. Please try again later.'));
        }))
  }

  addProduct(newProduct: Product): Observable<number> {
    return this.http.post<number>('http://localhost:5157/api/Products', newProduct)
      .pipe(
        catchError(error => {
          console.error('Problem adding product:', error);
          return throwError(() => new Error('Oops! Something went wrong. Please try again later.'));
        }))
  }

  deleteProduct(productId: number) {
    return this.http.delete(`http://localhost:5157/api/Products?productId=${productId}`)
      .pipe(tap(() => this.refetchProducts.next(null)))
  }
}
