
export class Router {

    configureRouter(config, router) {

        config.map([
            { route: ['','home', 'index'], moduleId: 'store/store-home', nav: false },
            { route: ['admin'], moduleId: 'store/admin/admin', title: 'Admin', settings: { auth: true } }
        ]);
        this.router = router;
    };

}
