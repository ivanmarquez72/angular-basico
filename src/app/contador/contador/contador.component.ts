import { Component } from '@angular/core' 

@Component({
    selector: 'app-contador',
    template: ` 
        <h1> {{ titulo }} </h1>    
        <h3>La base es: <strong> {{base1}} </strong> </h3>
        
        <button (click)=" acumulador(base1); "> + {{ base1 }} </button>
        
        <span> {{ numero3 }} </span>
        
        <button (click)=" acumulador(-base1); "> - {{ base1 }} </button>
    
    `

})
export class ContadorComponent{
    titulo: string = 'Contador App';

    numero3: number = 10;
    base1: number = 5;

    acumulador(valor: number){
        this.numero3 += valor;
    }
}