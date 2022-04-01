import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Cliente } from './cliente';
import { Observable } from 'rxjs';


//llamadas a los servicios REST

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  //url del servicio
  private url : string = 'http://localhost:8080/clientes';
  
  //Clase para que se haga la petcion como cliente --HttpClient--
  constructor( private http : HttpClient) { }

  //Obtener estudiantes
  getAll() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  //crear cliente
  create(cliente : Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.url, cliente);
  }

  //get un cliente
  getCliente(id: number) : Observable<Cliente>{
    return this.http.get<Cliente>(this.url+'/'+id);
  }

  //Actualizar un cliente
  update(cliente : Cliente, id:number) : Observable<Cliente>{
    return this.http.put<Cliente>(this.url+'/'+id, cliente);
  } 

  //eliminar cliente
  delete(id:number): Observable<Cliente>{
    return this.http.delete<Cliente>(this.url+'/'+id);
  }



}
