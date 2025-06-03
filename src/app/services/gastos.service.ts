import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GastoEncabezado } from '../models/gasto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  private apiUrl = 'https://gastosappapi-edd8acbtd2dkdxgh.mexicocentral-01.azurewebsites.net/api/gasto';

  constructor(private http: HttpClient) {}

  create(gasto: GastoEncabezado): Observable<any> {
    return this.http.post<any>(this.apiUrl, gasto);
  }
}
