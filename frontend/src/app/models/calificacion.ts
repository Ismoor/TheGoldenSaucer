export interface Calificacion {
  nombre_mesero: string;
  nombre_cliente: string;
  calificacion: string;
  comentario_adicional?: string;
}

export interface CalificacionDelete {
  _id: string;
  nombre_mesero: string;
  nombre_cliente: string;
  calificacion: string;
  comentario_adicional?: string;
}
