import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaseRoutingModule } from './clase-routing.module';
import { ClaseListarComponent } from './component/clase-listar/clase-listar.component';
import { ClaseCrearComponent } from './component/clase-crear/clase-crear.component';
import { MaterialModule } from '../material/material.module';
import { ClaseService } from './shared/service/clase.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ClaseEditarComponent } from './component/clase-editar/clase-editar.component';


@NgModule({
  declarations: [
    ClaseListarComponent,
    ClaseCrearComponent,
    ClaseEditarComponent
  ],
  imports: [
    CommonModule,
    ClaseRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers:[
    ClaseService
  ]
})
export class ClaseModule { }
