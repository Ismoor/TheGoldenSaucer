import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plato } from '../models/plato'

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    private apiUrl = 'http://localhost:3030/menu'; 

    constructor(private http: HttpClient) { }

    getPlatos(): Observable<Plato[]> {
        return this.http.get<Plato[]>(this.apiUrl);
    }
    
}
