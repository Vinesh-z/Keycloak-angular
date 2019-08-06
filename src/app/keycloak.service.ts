// import { Injectable } from '@angular/core';

// declare var Keycloak: any;

// @Injectable({
//   providedIn: 'root'
// })
// export class KeycloakService {
//   public keycloakAuth: any;

//   constructor() { }
//   Keycloak: any;
//   init(): Promise<any> {
//     return new Promise((resolve, reject) => {
//       const config = {
//         'url': 'http://localhost:8080/auth',
//         'realm': 'Role-Based',
//         'clientId': 'front-end'
//       };
//       this.keycloakAuth = new Keycloak(config);
//       this.keycloakAuth.init({ onLoad: 'login-required' })
//         .success(() => {
//           resolve();
//         })
//         .error(() => {
//           reject();
//         });
//       });
//   }

//   getToken(): string {
//     return this.keycloakAuth.token;
//   }
// }
