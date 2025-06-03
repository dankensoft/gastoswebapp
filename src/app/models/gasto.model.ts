export interface GastoDetalle {
  idTipoGasto: number;
  monto: number;
}

export interface GastoEncabezado {
  fecha: string;
  idFondoMonetario: number;
  observaciones: string;
  nombreComercio: string;
  tipoDocumento: 'Comprobante' | 'Factura' | 'Otro';
  detalles: GastoDetalle[];
}
