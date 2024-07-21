import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido, PedidoUpdate } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private apiUrl = 'http://localhost:3030/pedido';

  constructor(private http: HttpClient) {}

  realizarPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.apiUrl, pedido);
  }

  actualizarPedido(id: string, pedido: PedidoUpdate): Observable<Pedido> {
    return this.http.put<Pedido>(`${this.apiUrl}/${id}`, pedido);
  }

  obtenerPedidos(): Observable<PedidoUpdate[]> {
    return this.http.get<PedidoUpdate[]>(this.apiUrl);
  }
}
