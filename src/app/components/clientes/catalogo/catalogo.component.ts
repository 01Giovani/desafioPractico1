import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { ClienteDTO, ClienteOutDTO } from 'src/app/shared/services/user';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  client:ClienteDTO[] = null;
  output: ClienteOutDTO = new ClienteOutDTO();

  constructor(public httpSevice: HttpService,
    public authService : AuthServiceService) { }

  ngOnInit(): void {
    this.getListadoClientes();
  }

  getListadoClientes(){
    
    this.httpSevice.getClientes().subscribe(result=> {            
        this.client= result;              
      },error=>{
        alert(JSON.stringify(error))
      }
    );
  }

  onSubmit(){
    this.httpSevice.setCliente(this.output).subscribe(result=>{
      alert("Almacenado!")
      this.getListadoClientes();
      this.output = new ClienteOutDTO();
    },error=>{[{"Codigo":1,"Descuento":0.00,"Total":22.30,"IdCliente":"14960223-9","IdMascota":1,"IdServicio":1,"Servicio":{"Codigo":1,"Nombre":"chequeo de rutina","Precio":22.30},"Cliente":{"Dui":"14960223-9","Nombre":"julio","Celular":"61805268","Mascotas":[]},"Mascota":{"Codigo":1,"Nombre":"tommy","IdCliente":"14960223-9"}}]
      alert(JSON.stringify(error))
    })
  }
}
