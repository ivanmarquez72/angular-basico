import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService{

    private _personajes : Personaje[] = [
        { 
          nombre : 'Goku',
          poder: 2500
        },
        { 
          nombre : 'Gohan',
          poder: 2000
        },
        { 
          nombre : 'Vegetta',
          poder: 2499
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes]; //Separa todos los elementos y crea un nuevo arreglo
                                    //Haciendo una nueva referencia
    }

    constructor(){ }

    agreggarPersonaje (personaje: Personaje){
        this._personajes.push(personaje);
    }

}
