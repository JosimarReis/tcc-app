export class PesquisaHistorico{
    _id:string;
    termo:string;
    cidade:string;
    uf:string;
    created:Date;
    usuario:any;

    constructor(termo:string, cidade:string, uf:string,usuario:any){
        this.termo=termo;
        this.cidade=cidade;
        this.uf=uf;
        this.usuario=usuario;
    }
}