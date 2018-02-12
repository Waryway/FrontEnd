import {bindable,inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(Element)
export class Login {

    email;
    password

    constructor(element){
        this.element = element;




        /*    .configure(x => {
                x.withBaseUrl('http://localhost:9001');
                x.withHeader('Authorization', 'bearer 123');
            });

        client.get('/login/kyle/password');*/
    }

    loginSubmit(){
        let client = new HttpClient();
        client.createRequest('/login/'+this.email+'/'+this.password)
            .asGet()
            .withBaseUrl('http://localhost:9001')
            .withHeader('Authorization', 'bearer 123')
            // .withParams({ abc: '123' })
            .send();
    }

    changeSignInModalState() {
        let e = new CustomEvent('modalcloseevent', {bubbles: true}); //create the event
        this.element.dispatchEvent(e);//dispatch the event
    }
}