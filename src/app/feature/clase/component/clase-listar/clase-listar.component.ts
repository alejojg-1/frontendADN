import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Clase } from '../../shared/model/clase.model';
import { ClaseService } from '../../shared/service/clase.service';

@Component({
  selector: 'app-clase-listar',
  templateUrl: './clase-listar.component.html',
  styleUrls: ['./clase-listar.component.css']
})
export class ClaseListarComponent implements OnInit {

  clases: Clase[]
  dataSource;
  displayedColumns : string [] = [ 'id' , 'idUsuario' , 'idCurso','fechaInicio','fechaFin','costoTotal','editar','eliminar'];
  constructor(
    private claseService:ClaseService,
    private router:Router) { 

    }

  ngOnInit(): void {
    this.fetchClases()
  }

  applyFilter(filterValue:String){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter=filterValue;
  }

  fetchClases(){
    this.claseService.consultar().subscribe(
      clases=>{
        this.clases=clases;
        this.dataSource= new MatTableDataSource(this.clases);
        this.dataSource.filterPredicate=function(data,filter:string): boolean{
          return data.idUsuario.toString()===filter;
        }
      }
    )
  }

  deleteClase(id:number){
    this.claseService.eliminar(id)
    .subscribe(()=>{
      this.fetchClases();
      this.router.navigate(['/clase'])
    })

  }

}
