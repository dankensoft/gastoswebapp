import { Component, OnInit } from '@angular/core';
import { DashboardService, ComparativoDto } from '../../services/dashboard.service';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: string[] = [];
  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Presupuestado' },
      { data: [], label: 'Ejecutado' }
    ]
  };

  public fechaInicio: string = '';
  public fechaFin: string = '';

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    // Por defecto rango del mes actual
    const now = new Date();
    this.fechaInicio = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().slice(0,10);
    this.fechaFin = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().slice(0,10);

    this.cargarDatos();
  }

  cargarDatos() {
    if (!this.fechaInicio || !this.fechaFin) return;

    this.dashboardService.graficoComparativo(this.fechaInicio, this.fechaFin)
      .subscribe(data => {
        this.barChartLabels = data.map(d => d.tipoGasto);
        this.barChartData = {
          labels: this.barChartLabels,
          datasets: [
            { data: data.map(d => d.presupuestado), label: 'Presupuestado' },
            { data: data.map(d => d.ejecutado), label: 'Ejecutado' }
          ]
        };
      });
  }
}
