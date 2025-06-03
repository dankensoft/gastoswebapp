export interface Movimiento {
  id: number;
  tipoMovimiento: 'Deposito' | 'Gasto';
  fecha: string;
  fondoMonetarioNombre: string;
  monto: number;
  observaciones?: string;
  nombreComercio?: string;
  tipoDocumento?: string;
}
