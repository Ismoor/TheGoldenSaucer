export interface Pedido {
  nombres: string;
  apellidos: string;
  correo: string;
  direccion: string;
  detalles_pedido: string;
}

export interface PedidoUpdate {
  _id: string;
  nombres: string;
  apellidos: string;
  correo: string;
  direccion: string;
  detalles_pedido: string; 
}
