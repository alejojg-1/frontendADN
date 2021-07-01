import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../shared/model/usuario';
import { UsuarioService } from '../../shared/service/usuario.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {

  usuarios: Usuario[]

  displayedColumns : string [] = [ 'id' , 'nombre' , 'identificacion','editar','eliminar'];
  constructor(
    private usuarioService:UsuarioService,
    private router:Router) { 

    }

  ngOnInit(): void {
    this.fetchUsuarios()
  }

  fetchUsuarios(){
    this.usuarioService.consultar().subscribe(
      usuarios=>{
        this.usuarios=usuarios;
      }
    )
  }


 

  deleteUsuario(id:number){
    this.usuarioService.eliminar(id)
    .subscribe(()=>{
      this.fetchUsuarios();
      this.router.navigate(['/usuario'])
    })

  }



}
