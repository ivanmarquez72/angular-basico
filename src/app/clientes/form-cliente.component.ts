import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  titulo:string = 'Registro de Cliente'

  constructor(
    private clienteService: ClienteService,
    private router:Router,
    private activatedRoute: ActivatedRoute
    ) { }

  //Metodo que se carga al llamar al compnente
  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void{
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if(id){
          this.clienteService.getCliente(id).subscribe(
            es => this.cliente = es
          );
        }
      }
    )
  }

  create(): void{
    console.log('nuevo Cliente: ', this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      res => this.router.navigate(['/clientes'])
    );
  }

  update(): void {
    this.clienteService.update(this.cliente, this.cliente.idCliente).subscribe(
      res => this.router.navigate(['/clientes'])
    )
  }

}
