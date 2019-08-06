import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
    return (): Promise<any> => {
        return new Promise(async (resolve, reject) => {

            try {
                await keycloak.init({
                    config: {
                        url: 'http://localhost:8080/auth',
                        realm: 'Role-Based',
                        clientId: 'front-end'
                    },
                    initOptions: {
                        // onLoad: 'login-required',
                        checkLoginIframe: false
                    },
                    enableBearerInterceptor: true,
                    bearerExcludedUrls: ['/assets', '/clients/public']
                });
                resolve();
            } catch (error) { }
        });
    };
}
