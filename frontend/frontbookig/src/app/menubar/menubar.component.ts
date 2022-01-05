import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';



@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  num: number = 0;

  items: MenuItem[] = [];

  constructor() { }

 

  ngOnInit(): void {


    this.items = [
      {
          label:'Main',
          icon:'pi pi-fw pi-user',
          routerLink: ['/admin']
      },
      {
          label:'Search',
          icon:'pi pi-fw pi-search',
          routerLink: ['/search']
      },
      {
        label:'Add',
        icon:'pi pi-fw pi-plus',
        routerLink: ['/add']
      },
      {
        label:'Sign out',
        icon:'pi pi-fw pi-sign-out',
        routerLink: ['/store']
      }
    ];
  }

}
