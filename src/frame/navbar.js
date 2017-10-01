import {inject} from 'aurelia-dependency-injection';
import {Router} from 'aurelia-router';

@inject(Router)
export class Navbar {
    constructor(router) {
        this.router = router;
        this.signInModalVisible = false;
        this.modalTarget = 'defaultTarget';
    }

    changeSignInModalState(target) {
        this.signInModalVisible = !this.signInModalVisible;
        this.modalTarget = target;
        this.modalContent = './login';
    }

   // toJob(id) {
    //   this.router.navigate("#/store/router"); // THIS WORKS
   // }
}