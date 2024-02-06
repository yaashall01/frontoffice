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
      {label: 'UIR-Shop', routerLink: ['/']},
      {label: 'Products', routerLink: ['/products']},
      {label: 'About', routerLink: ['/about']},
      {label: 'Contact', routerLink: ['/contact']}

    ]

  }

}
