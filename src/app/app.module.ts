import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TipoGastoComponent } from './pages/tipo-gasto/tipo-gasto.component';
import { PresupuestoComponent } from './pages/presupuesto/presupuesto.component';
import { FondoMonetarioComponent } from './pages/fondo-monetario/fondo-monetario.component';
import { DepositosComponent } from './pages/depositos/depositos.component';
import { GastosComponent } from './pages/gastos/gastos.component';
import { ConsultaMovimientosComponent } from './pages/consulta-movimientos/consulta-movimientos.component';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    DashboardComponent, 
    NavbarComponent, 
    TipoGastoComponent,
    PresupuestoComponent,
    FondoMonetarioComponent,
    DepositosComponent,
    GastosComponent,
    ConsultaMovimientosComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
