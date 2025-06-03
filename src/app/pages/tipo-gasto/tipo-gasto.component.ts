import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoGasto, TipoGastoService } from 'src/app/services/tipo-gasto.service';

@Component({
  selector: 'app-tipo-gasto',
  templateUrl: './tipo-gasto.component.html'
})
export class TipoGastoComponent implements OnInit {
  tipos: TipoGasto[] = [];
  form: FormGroup;
  editando = false;
  idEditar: number = 0;

  constructor(private service: TipoGastoService, private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.service.getAll().subscribe(data => this.tipos = data);
  }

  guardar(): void {
    const data = this.form.value;

    if (this.editando) {
      this.service.update(this.idEditar, data).subscribe(() => {
        this.resetForm();
        this.cargarDatos();
      });
    } else {
      this.service.create(data).subscribe(() => {
        this.resetForm();
        this.cargarDatos();
      });
    }
  }

  editar(item: TipoGasto): void {
    this.editando = true;
    this.idEditar = item.id;
    this.form.patchValue({ nombre: item.nombre });
  }

  eliminar(id: number): void {
    if (confirm('¿Deseas eliminar este tipo de gasto?')) {
      this.service.delete(id).subscribe(() => this.cargarDatos());
    }
  }

  resetForm(): void {
    this.form.reset();
    this.editando = false;
    this.idEditar = 0;
  }
}
