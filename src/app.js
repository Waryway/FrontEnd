export class App {
  constructor() {
    this.message = 'WaryWay';
  }
  configureRouter(config, router){
    config.title = 'WaryWay';
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      { route: ['', 'home'],    moduleId: 'home',   title: 'Home',nav: true},
      { route: 'store',         moduleId: 'store/router', name: 'store',  title: 'Store', nav: true},
      { route: 'review',        moduleId: 'review/router', name: 'review', title: 'Review', nav: true},
      { route: 'about',         moduleId: 'about/router', name: 'about', title: 'About', nav: true}
    ]);

    this.router = router;
  }

}

class AuthorizeStep {
  run(navigationInstruction, next) {
    if (navigationInstruction.getAllInstructions().some(i => i.config.settings.auth)) {
      var isLoggedIn = false;// insert magic here;
      if (!isLoggedIn) {
        return next.cancel(new Redirect('store'));
      }
    }

    return next();
  }
}