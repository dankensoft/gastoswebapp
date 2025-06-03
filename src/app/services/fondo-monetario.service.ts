import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FondoMonetario } from '../models/fondo-monetario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FondoMonetarioService {
  private apiUrl = 'https://gastosappapi-edd8acbtd2dkdxgh.mexicocentral-01.azurewebsites.net/api/fondomonetario';

  constructor(private http: HttpClient) {}

  getAll(): Observable<FondoMonetario[]> {
    return this.http.get<FondoMonetario[]>(this.apiUrl);
  }

  create(fondo: FondoMonetario): Observable<FondoMonetario> {
    return this.http.post<FondoMonetario>(this.apiUrl, fondo);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
