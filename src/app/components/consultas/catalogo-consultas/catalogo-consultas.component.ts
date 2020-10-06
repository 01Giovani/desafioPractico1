import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { ClienteDTO, ConsultaDTO, ConsultaOutDTO, MascotaDTO, ServicioDTO } from 'src/app/shared/services/user';

@Component({
  selector: 'app-catalogo-consultas',
  templateUrl: './catalogo-consultas.component.html',
  styleUrls: ['./catalogo-consultas.component.css']
})
export class CatalogoConsultasComponent implements OnInit {

  mascotas:MascotaDTO[]= [];
  model:ConsultaOutDTO = new ConsultaOutDTO();
  clientes:ClienteDTO[] = null;
  servicios:ServicioDTO[] = null;
  consultas:ConsultaDTO[] = null;
  objConsulta:ConsultaOutDTO = new ConsultaOutDTO;

  constructor(public httpSevice: HttpService) { }

  ngOnInit(): void {
    this.getListas();
  }

  getListas(){
      this.httpSevice.getConsultas().subscribe(result =>{
            this.consultas = result;
      },error =>{
        alert("Opps! ocurrio un error")
      });

      this.httpSevice.getClientes().subscribe(result =>{
        this.clientes = result;
      },error =>{
        alert("Opps! ocurrio un error")
      });
      
      this.httpSevice.getServicios().subscribe(result =>{
        this.servicios = result;
      },error =>{
        alert("Opps! ocurrio un error")
      });
  }

  getMascotas(dui){
      this.httpSevice.getMascotas(dui).subscribe(result=>{
          this.mascotas = result;
      },error=>{

        alert("Opps! ocurrio un error")
      })
  }


  guardarConsulta(idCliente,idMascota,idServicio){
      this.objConsulta.dui = idCliente;
      this.objConsulta.idMascota = idMascota;
      this.objConsulta.idServicio = idServicio;

      this.httpSevice.setConsulta(this.objConsulta).subscribe(result=>{
          alert("Almacenado!")
          this.getListas()
          this.mascotas= [];
      },error=>{
        alert("Opps! ocurrio un error")
      })
  }



}
