import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente'
import { stringify } from 'querystring';
import { AuthServiceService } from '../shared/services/auth-service.service';
import { HttpService } from '../shared/services/http.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  
  listaClientes : Array<Cliente> = [];
  cliente = new Cliente('','','','','',0);  
  

  constructor(
    public authService : AuthServiceService,
    public httpSevice: HttpService
  ) { }



  ngOnInit(): void {    
  }

  onSubmit(){  
    if(!this.cliente.nombre || !this.cliente.dui || !this.cliente.nombreMascota || !this.cliente.tratamiento || !this.cliente.medicamento || !this.cliente.costo)
      return;

    var local:Cliente = this.cliente;
    var conteoLocal:number =1;

    this.listaClientes.forEach(function(value){
      if(value.dui== local.dui){
        conteoLocal++;
      }

    });


    if(conteoLocal >= 2 && conteoLocal <=4){
      local.descuento = 5;
      local.precioFinal =local.costo-(local.costo*0.05)
    } 
    if(conteoLocal > 4){
      local.descuento = 10
      local.precioFinal =local.costo-(local.costo*0.10)
    }

    

    this.listaClientes.push(local);    
    this.cliente = new Cliente('','','','','',0);  
    
  }

}
