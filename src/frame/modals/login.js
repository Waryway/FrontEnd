import {bindable,inject} from 'aurelia-framework';

@inject(Element)
export class Login {


    constructor(element){
        this.element = element;
    }

    changeSignInModalState() {
        let e = new CustomEvent('modalcloseevent', {bubbles: true}); //create the event
        this.element.dispatchEvent(e);//dispatch the event
    }
}