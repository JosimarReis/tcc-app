export class Usuario {
  nome: string;
  email: string;
  senha:string;
  created: Date;
  situacao: boolean;
  admin:boolean;


  constructor(nome: string, email: string,situacao:boolean,admin:boolean) {
    this.nome = nome;
    this.email = email;
    this.situacao=situacao;
    this.admin=admin;
  }
}