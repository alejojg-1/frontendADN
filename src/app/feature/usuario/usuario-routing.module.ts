import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCrearComponent } from './component/usuario-crear/usuario-crear.component';
import { UsuarioEditarComponent } from './component/usuario-editar/usuario-editar.component';
import { UsuarioListarComponent } from './component/usuario-listar/usuario-listar.component';

const routes: Routes = [
  {
    path:'',
    component: UsuarioListarComponent
  },
  {
    path:'crear',
    component: UsuarioCrearComponent
  },
  {
    path:'editar/:id',
    component: UsuarioEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
