// src/app/models/pedido.ts
export interface Pedido {
  nombres: string;
  apellidos: string;
  correo: string;
  direccion: string;
  detalles_pedido: string; // Esto ahora contendrá el nombre del platillo
  platilloSeleccionado: number;
}
