export class Cliente {
    public nombre:string;
    public dui:string;
    public nombreMascota:string;
    public tratamiento:string;
    public medicamento:string;
    public costo:number;
    public descuento:number;
    public precioFinal:number;
    
    

    constructor(
        nombre:string,
        dui:string,
        nombreMascota:string,
        tratamiento:string,
        medicamento:string,
        costo:number,
        descuento?:number,
        precioFinal?:number

    ){
        this.nombre=nombre;
        this.dui= dui;
        this.nombreMascota=nombre;
        this.tratamiento=tratamiento;
        this.medicamento=medicamento;
        this.costo=costo;
        this.descuento=descuento;
        this.precioFinal=precioFinal;
        
    }
    
    

}
