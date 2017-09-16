export class App {
  constructor() {
    this.message = 'WaryWay';
  }
  configureRouter(config, router){
    config.title = 'WaryWay';
    config.map([
      { route: ['', 'home'],    moduleId: 'home',   title: 'Home',nav: true},
      { route: 'store',         moduleId: 'store/router', name: 'store',  title: 'Store', nav: true},
      { route: 'about/home',         moduleId: 'about/router', name: 'about/home',  title: 'About', nav: true},
      { route: 'about/:path',   moduleId: 'about/router', name: 'about',  title: 'About', nav: true, href:'#about'}
    ]);

    this.router = router;
  }

}
