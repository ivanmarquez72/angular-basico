import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Captain America', 'Black Widow'];
  
  heroeBorrado:string = '';

  borrando(){
    this.heroeBorrado = this.heroes.pop() || ''; 
  }
 
}
