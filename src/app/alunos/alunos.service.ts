import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    {id: '1', nome: 'Alexandre Oliveira', email: 'ale@123.com'},
    {id: '2', nome: 'Ricardo Fernandes', email: 'ricardo@123.com'},
    {id: '3', nome: 'Claudemiro', email: 'clau@123.com'},
    {id: '4', nome: 'Ana Carolina', email: 'anac@123.com'},
    {id: '5', nome: 'Ana Cristina', email: 'anac@123.com'},
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: String) {
    for (let i = 0; i < this.alunos.length; i++) {
      let aluno = this.alunos[i];
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
