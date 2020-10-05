import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClienteDTO } from './user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url='http://sitio2.bitworks.com.sv/desafio2/consulta/';
  constructor(private http:HttpClient) { }

  getClientes(){
    var ruta:string = this.url+"GetClientes";    
    return this.http.get<ClienteDTO[]>(ruta,{
      responseType:'json'
    });
  }

  getMascotas(){
    var ruta:string = this.url+"GetMascotas";  
    return this.http.get(`${this.url}GetMascotas`);
  }

  getServicios(){
    var ruta:string = this.url+"GetServicios";    
    return this.http.get(ruta);
  }

  getConsultas(){
    var ruta:string = this.url+"GetConsultas";  
    return this.http.get(ruta);
  }

  setCliente(objCliente){
    var ruta:string = this.url+"GuardarCliente";  
    
    
    return this.http.post(ruta, JSON.stringify(objCliente),
    {
      headers:{'Content-Type':'Application/Json'}
    }
    );

  }

  setConsulta(objConsulta){
    var ruta:string = this.url+"GuardarConsulta";  
    return this.http.post(ruta, JSON.stringify(objConsulta));
  }
}
