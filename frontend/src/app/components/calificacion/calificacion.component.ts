import { Component } from '@angular/core';
import { CalificacionService } from '../../services/calificacion.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent {
  calificacionEnviada: boolean = false;
  constructor(private calificacionService: CalificacionService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const calificacion = {
        nombre_mesero: form.value.employee_name,
        nombre_cliente: form.value.customer_name,
        calificacion: this.convertRatingToText(form.value.waiter_rating),
        comentario_adicional: form.value.comment
      };

      this.calificacionService.enviarCalificacion(calificacion).subscribe(
        response => {
          console.log('Calificación enviada exitosamente:', response);
          this.calificacionEnviada = true;
        },
        error => {
          console.error('Error al enviar la calificación:', error);
          this.calificacionEnviada = false; 

        }
      );
    }
  }

  convertRatingToText(rating: number): string {
    const ratings: { [key: number]: string } = {
      5: 'excelente',
      4: 'muy bueno',
      3: 'bueno',
      2: 'regular',
      1: 'malo'
    };
    return ratings[rating];
  }
}