import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClienteDTO, ConsultaDTO, MascotaDTO, ServicioDTO } from './user';

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

  getMascotas(dui){
    var ruta:string = this.url+"GetMascotas?dui="+dui;  
    return this.http.get<MascotaDTO[]>(ruta);
  }

  getServicios(){
    var ruta:string = this.url+"GetServicios";    
    return this.http.get<ServicioDTO[]>(ruta);
  }

  getConsultas(){
    var ruta:string = this.url+"GetConsultas";  
    return this.http.get<ConsultaDTO[]>(ruta);
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
    return this.http.post(ruta, JSON.stringify(objConsulta),{
      headers:{'Content-Type':'Application/Json'}
    });
  }
}
