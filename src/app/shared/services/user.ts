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

