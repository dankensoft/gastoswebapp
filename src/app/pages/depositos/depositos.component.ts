import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepositosService } from 'src/app/services/depositos.service';
import { FondoMonetarioService } from 'src/app/services/fondo-monetario.service';
import { Deposito } from 'src/app/models/deposito.model';
import { FondoMonetario } from 'src/app/models/fondo-monetario.model';

@Component({
  selector: 'app-depositos',
  templateUrl: './depositos.component.html'
})
export class DepositosComponent implements OnInit {
  form: FormGroup;
  rangoForm: FormGroup;
  depositos: Deposito[] = [];
  fondos: FondoMonetario[] = [];

  constructor(
    private fb: FormBuilder,
    private depositoService: DepositosService,
    private fondoService: FondoMonetarioService
  ) {
    const hoy = new Date().toISOString().substring(0, 10);
    this.form = this.fb.group({
      idFondoMonetario: [null, Validators.required],
      monto: [0, [Validators.required, Validators.min(1)]],
      fecha: [hoy, Validators.required]
    });

    this.rangoForm = this.fb.group({
      inicio: [hoy, Validators.required],
      fin: [hoy, Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarFondos();
    this.buscarTodos();
  }

  cargarFondos() {
    this.fondoService.getAll().subscribe(data => this.fondos = data);
  }

  guardar() {
    if (this.form.valid) {
      this.depositoService.create(this.form.value).subscribe(() => {
        this.form.reset({ fecha: new Date().toISOString().substring(0, 10) });
        this.buscarTodos();
      });
    }
  }

  buscarTodos() {
    this.depositoService.getAll().subscribe(data => this.depositos = data);
  }

  buscarPorRango() {
    const { inicio, fin } = this.rangoForm.value;
    this.depositoService.getPorRango(inicio, fin).subscribe(data => this.depositos = data);
  }

  getNombreFondo(id: number): string {
  return this.fondos.find(f => f.idFondoMonetario === id)?.nombre || 'N/A';
}

}
