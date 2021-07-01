import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoCrearComponent } from './component/curso-crear/curso-crear.component';
import { CursoEditarComponent } from './component/curso-editar/curso-editar.component';
import { CursoListarComponent } from './component/curso-listar/curso-listar.component';

const routes: Routes = [
  {
    path:'',
    component: CursoListarComponent
  },
  {
    path:'crear',
    component: CursoCrearComponent
  },
  {
    path:'editar/:id',
    component: CursoEditarComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
