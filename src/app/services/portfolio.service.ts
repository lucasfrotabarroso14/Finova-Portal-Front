import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Portfolio } from '../Interfaces/Portfolio';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}/portfolio`

  constructor(private http : HttpClient) { }

  getPortfolios(): Observable<Portfolio[]> {
    return this.http.get<{ result: Portfolio[] }>(this.apiUrl)
      .pipe(
        map(response => response.result)
      );
  }
  getPortfolioById(id: number):Observable<Portfolio[]>{
    const url =`${this.apiUrl}/${id}`
    return this.http.get<{ result: Portfolio[] }>(url)
    .pipe(map(response=>response.result))
  }
}
