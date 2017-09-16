import {inject} from 'aurelia-dependency-injection';
import {Router} from 'aurelia-router';

@inject(Router)
export class Navbar {
    constructor(router) {
        this.router = router;
    }



   // toJob(id) {
    //   this.router.navigate("#/store/router"); // THIS WORKS
   // }
}