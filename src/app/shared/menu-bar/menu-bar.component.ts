import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
        {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
                {
                    label: 'Texts and Dates',
                    icon: 'pi pi-align-left',
                    routerLink: '/'
                },
                {
                    label: 'Numbers',
                    icon: 'pi pi-sort-numeric-down',
                    routerLink: 'numbers'
                },
                {
                    label: 'Not Commons',
                    icon: 'pi pi-ticket',
                    routerLink: 'not-commons'
                }
            ]
        },
        {
            label: 'Pipes Personalizados',
            icon: 'pi pi-pencil',
            routerLink: 'custom'
        }
    ];
  }
}
