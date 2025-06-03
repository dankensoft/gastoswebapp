import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movimiento } from '../models/movimiento.model';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {
  private apiUrl = 'https://gastosappapi-edd8acbtd2dkdxgh.mexicocentral-01.azurewebsites.net/api/movimiento';

  constructor(private http: HttpClient) {}

  obtenerPorRangoFechas(inicio: string, fin: string): Observable<Movimiento[]> {
    // inicio(yyyy-MM-dd) y fin(yyyy-MM-dd)
    let params = new HttpParams()
      .set('inicio', inicio)
      .set('fin', fin);

    return this.http.get<Movimiento[]>(`${this.apiUrl}/rango`, { params });
  }
}
