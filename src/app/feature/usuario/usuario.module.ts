import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListarComponent } from './component/usuario-listar/usuario-listar.component';
import { UsuarioCrearComponent } from './component/usuario-crear/usuario-crear.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from './shared/service/usuario.service';
import { UsuarioEditarComponent } from './component/usuario-editar/usuario-editar.component';


@NgModule({
  declarations: [
    UsuarioListarComponent,
    UsuarioCrearComponent,
    UsuarioEditarComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers:[
    UsuarioService
  ]
})
export class UsuarioModule { }
