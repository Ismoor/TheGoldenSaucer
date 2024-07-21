import { Component, OnInit } from '@angular/core';
import { CalificacionService } from '../../services/calificacion.service';
import { CalificacionDelete } from '../../models/calificacion';

@Component({
  selector: 'app-delete-calificacion',
  templateUrl: './delete-calificacion.component.html',
  styleUrls: ['./delete-calificacion.component.css']
})
export class DeleteCalificacionComponent implements OnInit {
  calificaciones: CalificacionDelete[] = [];

  constructor(private calificacionService: CalificacionService) {}

  ngOnInit(): void {
    this.calificacionService.obtenerCalificaciones().subscribe(
      (calificaciones) => {
        this.calificaciones = calificaciones;
      },
      (error) => {
        console.error('Error al obtener las calificaciones:', error);
      }
    );
  }

  deleteCalificacion(id: string): void {
    this.calificacionService.eliminarCalificacion(id).subscribe(
      () => {
        console.log('Calificación eliminada');
        this.ngOnInit(); // Refresh the list
      },
      (error) => {
        console.error('Error al eliminar la calificación:', error);
      }
    );
  }
}
