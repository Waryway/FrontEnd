
export class Router {

    configureRouter(config, router) {
        config.map([
            { route: ['','home', 'index'], moduleId: 'store/store-home', nav: false }
        ]);
        this.router = router;
    };

}