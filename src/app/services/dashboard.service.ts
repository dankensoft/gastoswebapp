import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ComparativoDto {
  tipoGasto: string;
  presupuestado: number;
  ejecutado: number;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'https://gastosappapi-edd8acbtd2dkdxgh.mexicocentral-01.azurewebsites.net/api/movimiento';

  constructor(private http: HttpClient) {}

  graficoComparativo(inicio: string, fin: string): Observable<ComparativoDto[]> {
    return this.http.get<ComparativoDto[]>(`${this.apiUrl}?inicio=${inicio}&fin=${fin}`);
  }
}
