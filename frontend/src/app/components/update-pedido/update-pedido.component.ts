import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PedidosService } from '../../services/pedidos.service';
import { MenuService } from '../../services/menu.service';
import { PedidoUpdate } from '../../models/pedido';
import { Plato } from '../../models/plato';

@Component({
  selector: 'app-update-pedido',
  templateUrl: './update-pedido.component.html',
  styleUrls: ['./update-pedido.component.css']
})
export class UpdatePedidoComponent implements OnInit {
  pedidos: PedidoUpdate[] = [];
  platos: Plato[] = [];
  selectedPedido: PedidoUpdate | null = null;
  pedidoForm: FormGroup;
  

  constructor(private pedidosService: PedidosService, private fb: FormBuilder, private menuService: MenuService
  ) {
    
    this.pedidoForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      detalles_pedido: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerPlatos();
    this.pedidosService.obtenerPedidos().subscribe(
      (pedidos) => {
        this.pedidos = pedidos;
      },
      (error) => {
        console.error('Error al obtener los pedidos:', error);
      }
    );
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

  selectPedido(pedido: PedidoUpdate): void {
    this.selectedPedido = pedido;
    this.pedidoForm.patchValue(pedido);
  }

  onSubmit(): void {
    if (this.selectedPedido && this.pedidoForm.valid) {
      const updatedPedido: PedidoUpdate = {
        _id: this.selectedPedido._id,
        ...this.pedidoForm.value
      };
      this.pedidosService.actualizarPedido(this.selectedPedido._id, updatedPedido).subscribe(
        (updatedPedido) => {
          console.log('Pedido actualizado:', updatedPedido);
          this.selectedPedido = null;
          this.pedidoForm.reset();
          this.ngOnInit(); // Refresh the list
        },
        (error) => {
          console.error('Error al actualizar el pedido:', error);
        }
      );
    }
  }
}
