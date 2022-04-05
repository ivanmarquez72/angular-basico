import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor} from './my-Interceptor'

import { Routes, RouterModule } from '@angular/router';

import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { FormClienteComponent } from './clientes/form-cliente.component';

//Para trabajar con formualrios
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './dbz/main-page/main-page.component';
import { DbzModule } from './dbz/dbz.module';


const routes: Routes = [
  //Son las rutas que apareceran en el navegador 
  //aqui van todas las rutas
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/form', component: FormClienteComponent },
  { path: 'clientes/form/:id', component: FormClienteComponent }, //:id es para que reciba un parametro
  
]

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProductosComponent,
    FormClienteComponent, 
    
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule 
    , HttpClientModule
    , RouterModule.forRoot(routes)
    , FormsModule
    , DbzModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: MyInterceptor, 
      multi: true 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
