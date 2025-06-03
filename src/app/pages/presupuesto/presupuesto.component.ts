import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Presupuesto } from '../../models/presupuesto.model';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html'
})
export class PresupuestoComponent implements OnInit {
  form: FormGroup;
  presupuesto: Presupuesto | null = null;
  usuarioActual: string = 'admin';

  constructor(
    private fb: FormBuilder,
    private service: PresupuestoService
  ) {
    this.form = this.fb.group({
      mes: [null, Validators.required],
      anio: [null, Validators.required],
      idTipoGasto: [null, Validators.required],
      monto: [null, Validators.required],
      usuario: [this.usuarioActual, Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarPresupuesto();
  }

  cargarPresupuesto(): void {
    this.service.getByUsuario(this.usuarioActual).subscribe({
      next: data => {
        this.presupuesto = data;
        this.form.patchValue(data);
      },
      error: err => {
        console.warn('Sin presupuesto aún, puede crear uno nuevo.', err);
      }
    });
  }

  guardar(): void {
    if (this.form.valid) {
      const nuevoPresupuesto: Presupuesto = this.form.value;

      this.service.create(nuevoPresupuesto).subscribe({
        next: () => {
          this.cargarPresupuesto();
          this.form.reset({ usuario: this.usuarioActual });
        },
        error: err => {
          console.error('Error al guardar presupuesto', err);
        }
      });
    }
  }
}
