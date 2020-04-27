import { CursoFormComponent } from './cursos/curso-form/curso-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { AuthGuard } from './login/login-guard';


const routes: Routes = [
  { path: 'alunos', canActivate: [AuthGuard], component: AlunosComponent },
  { path: 'cursos', canActivate: [AuthGuard],  component: CursosComponent },
  { path: 'cursos/novo', canActivate: [AuthGuard],  component: CursoFormComponent },
  { path: 'cursos/:id', canActivate: [AuthGuard],  component: CursoDetalheComponent },
  { path: 'cursos/:id/editar', canActivate: [AuthGuard],  component: CursoFormComponent },
  { path: '', canActivate: [AuthGuard], component: HomeComponent},
  { path: 'signin', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
