import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

//Aqui va la logica

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  titulo: string = 'Lista de clientes';

  clientes : Cliente[] = [];


  constructor(private clienteService : ClienteService) { }

  ngOnInit(): void {
    //suscribe es para poder conectarnos a la API
    this.clienteService.getAll().subscribe(
      e => this.clientes = e
    );    
  }

  delete(cliente:Cliente):void {
    console.log("Hello from delete")
    this.clienteService.delete(cliente.idCliente).subscribe(
      res => this.clienteService.getAll().subscribe(
        response => this.clientes = response
      )
    );
  }

}
