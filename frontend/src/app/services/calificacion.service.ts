import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calificacion } from '../models/calificacion';


@Injectable({
  providedIn: 'root'
})
export class CalificacionService {
  private apiUrl = 'http://localhost:3030/calificaciones';
  constructor(private http: HttpClient) { }
  enviarCalificacion(calificacion: Calificacion): Observable<any> {
    return this.http.post<any>(this.apiUrl, calificacion);
  }
}