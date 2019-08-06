import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean;
  constructor(protected keycloakAngular: KeycloakService) { }

  ngOnInit() {
    this.keycloakAngular.isLoggedIn().then(data=>{
      this.loggedIn = data;
    });
  }

  logout() {
    this.keycloakAngular.logout();
  }

}
