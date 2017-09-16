import {Router} from 'aurelia-router';

//@inject(Router)
export class Navbar {
    constructor(router) {
        this.router = router;
        this.website = 'WaryWay';
    }

   // toJob(id) {
    //   this.router.navigate("#/store/router"); // THIS WORKS
   // }
}