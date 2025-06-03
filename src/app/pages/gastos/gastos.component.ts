import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { GastosService } from 'src/app/services/gastos.service';
import { TipoGastoService } from 'src/app/services/tipo-gasto.service';
import { FondoMonetarioService } from 'src/app/services/fondo-monetario.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  gastoForm!: FormGroup;
  tiposGasto: any[] = [];
  fondosMonetarios: any[] = [];
  tiposDocumento: string[] = ['Comprobante', 'Factura', 'Otro'];
  alertSobregiro: string | null = null;

  constructor(
    private fb: FormBuilder,
    private gastoService: GastosService,
    private tipoGastoService: TipoGastoService,
    private fondoMonetarioService: FondoMonetarioService
  ) {}

  ngOnInit() {
    this.gastoForm = this.fb.group({
      fecha: ['', Validators.required],
      idFondoMonetario: [null, Validators.required],
      observaciones: [''],
      nombreComercio: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      detalles: this.fb.array([], Validators.required)
    });

    this.cargarTiposGasto();
    this.cargarFondosMonetarios();
    this.agregarDetalle();
  }

  get detalles() {
    return this.gastoForm.get('detalles') as FormArray;
  }

  agregarDetalle() {
    this.detalles.push(this.fb.group({
      idTipoGasto: [null, Validators.required],
      monto: [null, [Validators.required, Validators.min(0.01)]]
    }));
  }

  eliminarDetalle(index: number) {
    this.detalles.removeAt(index);
  }

  cargarTiposGasto() {
    this.tipoGastoService.getAll().subscribe(res => {
      this.tiposGasto = res;
    });
  }

  cargarFondosMonetarios() {
    this.fondoMonetarioService.getAll().subscribe(res => {
      this.fondosMonetarios = res;
    });
  }

  guardar() {
    if (this.gastoForm.invalid) {
      this.gastoForm.markAllAsTouched();
      return;
    }

    const gasto = this.gastoForm.value;

    this.gastoService.create(gasto).subscribe({
      next: (response) => {
        if (response.sobregiro) {
          this.alertSobregiro = `¡Alerta! Sobregiro en: ${response.sobregiro.map((s: any) =>
            `${s.tipoGasto} (Presupuesto: ${s.presupuesto}, Gastado: ${s.gastado})`).join(', ')}`;
        } else {
          this.alertSobregiro = null;
          alert('Gasto registrado con éxito');
          this.gastoForm.reset();
          this.detalles.clear();
          this.agregarDetalle();
        }
      },
      error: (err) => {
        console.error(err);
        alert('Error al registrar gasto');
      }
    });
  }
}
