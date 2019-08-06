import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean;
  userDetails: any;
  profileImage: String;
  constructor(protected keycloakAngular: KeycloakService) { }

  ngOnInit() {
    this.keycloakAngular.isLoggedIn().then(data => {
      this.loggedIn = data;
    });

    try {
      this.userDetails = this.keycloakAngular.getKeycloakInstance().tokenParsed;
      console.log(this.userDetails.name);
      this.profileImage = this.userDetails.avatar;
    } catch (e) {
      console.log('Failed to load user details', e);
    }
  }

  logout() {
    this.keycloakAngular.logout();
  }

  login() {
    this.keycloakAngular.login();
  }

}
