import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Curso } from '../model/curso.model';

@Injectable()
export class CursoService {
 
  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Curso[]>(`${environment.url_api}/cursos/`, this.http.optsName('consultar cursos'));
  }
  public buscarPorId(id:number) {
    return this.http.doGet<Curso>(`${environment.url_api}/cursos/${id}`, this.http.optsName('consultar curso por id'));
  }
  public guardar(curso: Curso) {
    return this.http.doPost<Curso, boolean>(`${environment.url_api}/cursos/`, curso,
                                                this.http.optsName('crear/actualizar cursos'));
  }
  public eliminar(id: number) {
    return this.http.doDelete<boolean>(`${environment.url_api}/cursos/${id}`,
                                                 this.http.optsName('eliminar cursos'));
  }
  
  public editar(curso: Curso) {
    return this.http.doPut<Curso, boolean>(`${environment.url_api}/cursos/${curso.id}`, curso,
                                                this.http.optsName('crear/actualizar curso'));
    }

  


}
