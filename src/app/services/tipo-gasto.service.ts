import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TipoGasto {
  id: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class TipoGastoService {
  private apiUrl = 'https://gastosappapi-edd8acbtd2dkdxgh.mexicocentral-01.azurewebsites.net/api/tipogasto';

  constructor(private http: HttpClient) {}

  getAll(): Observable<TipoGasto[]> {
    return this.http.get<TipoGasto[]>(this.apiUrl);
  }

  get(id: number): Observable<TipoGasto> {
    return this.http.get<TipoGasto>(`${this.apiUrl}/${id}`);
  }

  create(data: TipoGasto): Observable<TipoGasto> {
    return this.http.post<TipoGasto>(this.apiUrl, data);
  }

  update(id: number, data: TipoGasto): Observable<TipoGasto> {
    return this.http.put<TipoGasto>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
