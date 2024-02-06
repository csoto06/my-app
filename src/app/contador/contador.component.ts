import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { Persona } from '../persona'

@Component({
    selector: 'app-contador',
    standalone: true,
    templateUrl: './contador.component.html',
    styleUrl: './contador.component.css',

})

export class ContadorComponent {

    constructor () {

    }

    numero: number = 1;

    decrementar(){
        this.numero--;
    }

    incrementar(){
        this.numero+=1;
    }

}