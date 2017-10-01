import {bindable,inject} from 'aurelia-framework';


@inject(Element)
export class Modal {
    @bindable modalHeader;
    @bindable modalContent;
    @bindable modalTarget;

    constructor(element){
        this.element = element;
        this.defaultModal = true;
    }

    modalHeaderChanged(newValue, oldValue){
        this.modalHeader = newValue;
    }

    modalContentChanged(newValue, oldValue){
        this.modalContent = newValue;
    }

    modalTargetChanged(newValue, oldValue){
        this.modalTarget = newValue;
        this.defaultModal = true;
        if(newValue = 'login')
        {
            this.defaultModal = false;
            this.login = true;
        } else {
            this.login = false;
        }
    }

    changeSignInModalState() {
        let e = new CustomEvent('modalcloseevent', {bubbles: true}); //create the event
        this.element.dispatchEvent(e);//dispatch the event
    }
}