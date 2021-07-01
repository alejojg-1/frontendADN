import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Clase } from '../model/clase.model';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Clase[]>(`${environment.url_api}/agendas/`, this.http.optsName('consultar clases'));
  }

  public buscarPorId(id:number) {
    return this.http.doGet<Clase>(`${environment.url_api}/agendas/${id}`, this.http.optsName('consultar clase por id'));
  }

  public buscarPorIdUsuario(id:number) {
    return this.http.doGet<Clase[]>(`${environment.url_api}/agendas/usuario/${id}`, this.http.optsName('consultar clase por id de usaurio'));
  }

  public guardar(clase: Clase) {
    return this.http.doPost<Clase, boolean>(`${environment.url_api}/agendas/`, clase,
                                                this.http.optsName('crear clases'));
  }

  public eliminar(id: number) {
    return this.http.doDelete<boolean>(`${environment.url_api}/agendas/${id}`,
                                                 this.http.optsName('eliminar clases'));
  }

  public editar(clase: Clase) {
    return this.http.doPut<Clase, boolean>(`${environment.url_api}/agendas/${clase.id}`, clase,
                                                this.http.optsName('actualizar clases'));
    }
}
