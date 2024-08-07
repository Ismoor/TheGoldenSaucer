import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { CalificacionComponent } from './components/calificacion/calificacion.component';
import { HomeComponent } from './components/home/home.component';
import { UpdatePedidoComponent } from './components/update-pedido/update-pedido.component';
import { DeleteCalificacionComponent } from './components/delete-calificacion/delete-calificacion.component';

const routes: Routes = [
  { path: 'calificacion', component: CalificacionComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'updatePedido', component: UpdatePedidoComponent},
  { path: 'deleteCalificacion', component: DeleteCalificacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
