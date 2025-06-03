import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Presupuesto } from '../models/presupuesto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  private apiUrl = 'https://gastosappapi-edd8acbtd2dkdxgh.mexicocentral-01.azurewebsites.net/api/presupuesto';

  constructor(private http: HttpClient) {}

  getByUsuario(usuario: string): Observable<Presupuesto> {
    return this.http.get<Presupuesto>(`${this.apiUrl}/${usuario}`);
  }

  create(presupuesto: Presupuesto): Observable<Presupuesto> {
    return this.http.post<Presupuesto>(this.apiUrl, presupuesto);
  }

}
