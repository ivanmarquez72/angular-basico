import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        //declaraciones que este tendra, estan invisibles para la aplicacion
        HeroeComponent,
        ListadoComponent
    ],
    //que cosas quiere que sean visibles de este modulo
    exports: [
        ListadoComponent
    ],
    //Van modulos unicamente
    imports:[
        //CommonModule

    ]
})
export class HeroesModule{

}