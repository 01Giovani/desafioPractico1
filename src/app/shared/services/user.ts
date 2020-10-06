export interface User {
   uid: string;
   email: string;
   displayName: string;
   photoURL: string;
   emailVerified: boolean;
}

export class ClienteDTO{
   Dui:string;
   Nombre:string;
   Celular:string;
   Mascotas:MascotaDTO[];
}

export class MascotaDTO{
   Codigo:number;
   Nombre:string;
   IdCliente:string;
}

export class ClienteOutDTO{
   dui :string;
   nombre :string;
   celular :string;
   nombreMascota :string;
}

export class ConsultaDTO{
   Codigo:number;
   Descuento:number;
   Total:number;
   IdCliente:string;
   IdMascota:number;
   IdServicio:number;
   Cliente:ClienteDTO;
   Mascota:MascotaDTO;
   Servicio:ServicioDTO;
}

export class ServicioDTO{
   Codigo:number;
   Nombre:string;
   Precio:number;
}


export class ConsultaOutDTO{
   dui:string;
   idMascota:number;
   idServicio:number;
}