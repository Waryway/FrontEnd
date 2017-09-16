
export class Router {

    configureRouter(config, router) {
        config.map([
            { route: ['','home', 'index'], moduleId: 'about/about-home', nav: false },
            { route: ['story'], moduleId: 'about/about-home', nav: false }
        ]);
        this.router = router;
    };

}