import { Component } from '@angular/core';
import { MovimientoService } from '../../services/movimiento.service';
import { Movimiento } from '../../models/movimiento.model';

@Component({
  selector: 'app-consulta-movimientos',
  templateUrl: './consulta-movimientos.component.html'
})
export class ConsultaMovimientosComponent {
  movimientos: Movimiento[] = [];
  fechaInicio: string = '';
  fechaFin: string = '';
  buscando: boolean = false;

  constructor(private movimientoService: MovimientoService) {}

  buscarMovimientos() {
    if (!this.fechaInicio || !this.fechaFin) return;

    this.buscando = true;
    this.movimientoService.obtenerPorRangoFechas(this.fechaInicio, this.fechaFin)
      .subscribe({
        next: data => this.movimientos = data,
        error: err => console.error('Error al obtener movimientos:', err),
        complete: () => this.buscando = false
      });
  }
}
