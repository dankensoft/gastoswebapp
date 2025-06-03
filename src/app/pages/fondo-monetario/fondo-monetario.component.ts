import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FondoMonetario } from 'src/app/models/fondo-monetario.model';
import { FondoMonetarioService } from 'src/app/services/fondo-monetario.service';

@Component({
  selector: 'app-fondo-monetario',
  templateUrl: './fondo-monetario.component.html'
})
export class FondoMonetarioComponent implements OnInit {
  fondos: FondoMonetario[] = [];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fondoService: FondoMonetarioService
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      montoInicial: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.cargarFondos();
  }

  cargarFondos() {
    this.fondoService.getAll().subscribe(data => this.fondos = data);
  }

  guardar() {
    if (this.form.valid) {
      const nuevoFondo = this.form.value;
      this.fondoService.create(nuevoFondo).subscribe(() => {
        this.form.reset();
        this.cargarFondos();
      });
    }
  }

  eliminar(id: number) {
    this.fondoService.delete(id).subscribe(() => this.cargarFondos());
  }
}
