import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';

@Injectable()
export class UsuarioService {

 
  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Usuario[]>(`${environment.url_api}/usuarios/`, this.http.optsName('consultar usuarios'));
  }
  public buscarPorId(id:number) {
    return this.http.doGet<Usuario>(`${environment.url_api}/usuarios/${id}`, this.http.optsName('consultar usuario por id'));
  }

  public guardar(usuario: Usuario) {
    return this.http.doPost<Usuario, boolean>(`${environment.url_api}/usuarios/`, usuario,
                                                this.http.optsName('crear/actualizar usuarios'));
  }

  public eliminar(id: number) {
    return this.http.doDelete<boolean>(`${environment.url_api}/usuarios/${id}`,
                                                 this.http.optsName('eliminar usuarios'));
  }

  public editar(usuario: Usuario) {
    return this.http.doPut<Usuario, boolean>(`${environment.url_api}/usuarios/${usuario.id}`, usuario,
                                                this.http.optsName('crear/actualizar usuarios'));
  }
}
