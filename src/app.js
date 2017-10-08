export class App {
  constructor() {
    this.message = 'WaryWay';
  }
  configureRouter(config, router){
    config.title = 'WaryWay';
    config.map([
      { route: ['', 'home'],    moduleId: 'home',   title: 'Home',nav: true},
      { route: 'store',         moduleId: 'store/router', name: 'store',  title: 'Store', nav: true},
      { route: 'about',         moduleId: 'about/router', name: 'about', title: 'About', nav: true}
    ]);

    this.router = router;
  }

}
