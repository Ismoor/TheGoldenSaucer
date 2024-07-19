import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Plato } from '../../models/plato'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    platos: Plato[] = [];

    constructor(private menuService: MenuService) { }

    ngOnInit(): void {
        this.menuService.getPlatos().subscribe(
            data => {
                this.platos = data;
            },
            error => {
                console.error('Error fetching platos:', error);
            }
        );
    }
}
