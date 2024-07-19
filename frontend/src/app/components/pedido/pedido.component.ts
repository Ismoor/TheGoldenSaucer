// src/app/components/pedido/pedido.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PedidosService } from '../../services/pedidos.service';
import { MenuService } from '../../services/menu.service';
import { Pedido } from '../../models/pedido';
import { Plato } from '../../models/plato';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  pedidoForm: FormGroup;
  pedidoRealizado: boolean = false;
  platos: Plato[] = [];

  constructor(
    private fb: FormBuilder,
    private pedidosService: PedidosService,
    private menuService: MenuService
  ) {
    this.pedidoForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      detalles_pedido: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerPlatos();
  }

  obtenerPlatos(): void {
    this.menuService.getPlatos().subscribe(
      platos => {
        this.platos = platos;
      },
      error => {
        console.error('Error al obtener los platillos:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.pedidoForm.valid) {
      const pedido: Pedido = {
        ...this.pedidoForm.value,
  
      };

      this.pedidosService.realizarPedido(pedido).subscribe(
        response => {
          console.log('Pedido realizado con éxito:', response);
          this.pedidoRealizado = true; // Marca el pedido como realizado
          this.pedidoForm.reset();
        },
        error => {
          console.error('Error al realizar el pedido:', error);
          this.pedidoRealizado = false;
        }
      );
    }
  }

  getPlatilloNombre(platilloId: number): string {
    const platillo = this.platos.find(p => p._id === platilloId);
    console.log(platillo?._id);
    return platillo ? platillo.name : 'Desconocido';
  }
}
