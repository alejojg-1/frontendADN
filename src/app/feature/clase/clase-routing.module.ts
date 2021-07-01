import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaseCrearComponent } from './component/clase-crear/clase-crear.component';
import { ClaseEditarComponent } from './component/clase-editar/clase-editar.component';
import { ClaseListarComponent } from './component/clase-listar/clase-listar.component';

const routes: Routes = [
  {
    path:'',
    component: ClaseListarComponent
  },
  {
    path:'crear',
    component: ClaseCrearComponent
  },
  {
    path:'editar/:id',
    component: ClaseEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaseRoutingModule { }
