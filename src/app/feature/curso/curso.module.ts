import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursoCrearComponent } from './component/curso-crear/curso-crear.component';
import { CursoListarComponent } from './component/curso-listar/curso-listar.component';
import { CursoService } from './shared/service/curso.service';
import { CursoEditarComponent } from './component/curso-editar/curso-editar.component';


@NgModule({
  declarations: [
    CursoCrearComponent,
    CursoListarComponent,
    CursoEditarComponent
  ],
  imports: [
    CommonModule,
    CursoRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers:[
    CursoService
  ]
})
export class CursoModule { }
