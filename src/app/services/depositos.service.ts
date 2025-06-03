import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deposito } from '../models/deposito.model';

@Injectable({
  providedIn: 'root'
})
export class DepositosService {
  private apiUrl = 'https://gastosappapi-edd8acbtd2dkdxgh.mexicocentral-01.azurewebsites.net/api/deposito';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Deposito[]> {
    return this.http.get<Deposito[]>(this.apiUrl);
  }

  getPorRango(inicio: string, fin: string): Observable<Deposito[]> {
    const params = new HttpParams()
      .set('inicio', inicio)
      .set('fin', fin);
    return this.http.get<Deposito[]>(`${this.apiUrl}/rango`, { params });
  }

  create(deposito: Deposito): Observable<Deposito> {
    return this.http.post<Deposito>(this.apiUrl, deposito);
  }
}
