import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  model: any[] = [];

  onInit() {
    this.model = [
      {label: 'UIR-Shop', icon: 'pi pi-fw pi-home', routerLink: ['/']},
      {label: 'Products', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/products']},
      {label: 'About', icon: 'pi pi-fw pi-info-circle', routerLink: ['/about']},
      {label: 'Contact', icon: 'pi pi-fw pi-envelope', routerLink: ['/contact']}

    ]

  }

}
