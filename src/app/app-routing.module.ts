import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TipoGastoComponent } from './pages/tipo-gasto/tipo-gasto.component';
import { FondoMonetarioComponent } from './pages/fondo-monetario/fondo-monetario.component';
import { PresupuestoComponent } from './pages/presupuesto/presupuesto.component';
import { GastosComponent } from './pages/gastos/gastos.component';
import { DepositosComponent } from './pages/depositos/depositos.component';
import { ConsultaMovimientosComponent } from './pages/consulta-movimientos/consulta-movimientos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tipos-gasto', component: TipoGastoComponent },
  { path: 'fondos-monetarios', component: FondoMonetarioComponent },
  { path: 'presupuestos', component: PresupuestoComponent },
  { path: 'gastos', component: GastosComponent },
  { path: 'depositos', component: DepositosComponent },
  { path: 'consulta-movimientos', component: ConsultaMovimientosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
