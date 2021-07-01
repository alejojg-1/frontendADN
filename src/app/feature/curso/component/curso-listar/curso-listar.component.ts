import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../../shared/model/curso.model';
import { CursoService } from '../../shared/service/curso.service';

@Component({
  selector: 'app-curso-listar',
  templateUrl: './curso-listar.component.html',
  styleUrls: ['./curso-listar.component.css']
})
export class CursoListarComponent implements OnInit {

  cursos: Curso[]

  displayedColumns : string [] = [ 'id' , 'nombre' , 'tipo','precio','descripcion','editar','eliminar'];
  constructor(
    private cursoService:CursoService,
    private router:Router) { 

    }

  ngOnInit(): void {
    this.fetchUsuarios()
  }

  fetchUsuarios(){
    this.cursoService.consultar().subscribe(
      cursos=>{
        this.cursos=cursos;
      }
    )
  }

  deleteCurso(id:number){
    this.cursoService.eliminar(id)
    .subscribe(()=>{
      this.fetchUsuarios();
      this.router.navigate(['/curso'])
    })

  }

}
