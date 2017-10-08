
export class Router {

    configureRouter(config, router) {
        config.map([
            { route: ['home', 'index'], moduleId: 'about/about-home', nav: false },
            { route: ['contact'], moduleId: 'about/about-contact', nav: false },
            { route: ['privacy'], moduleId: 'about/about-privacy', nav: false },
            { route: ['story'], moduleId: 'about/about-story', nav: false }
        ]);
        this.router = router;
    };

    activate(params, navigationInstruction) {
        this.story = 'active';
    }
}