export class App {
  constructor() {
    this.message = 'WaryWay';
  }
  configureRouter(config, router){
    config.title = 'Contacts';
    config.map([
      { route: '',              moduleId: 'home',   title: 'Select'}
    ]);

    this.router = router;
  }

}
