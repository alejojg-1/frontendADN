import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';

import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {

  let httpMock: HttpTestingController;
  let service: UsuarioService;
  const apiEndpointUsuariosConsulta= `${environment.url_api}/usuarios`;
  const apiEndPointUsuarios= `${environment.url_api}/usuarios`

  beforeEach(() => {
    const injector=TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuarioService, HttpService]
    })
    httpMock= injector.inject(HttpTestingController);
    service= TestBed.inject(UsuarioService);
  });

  it('should be created', () => {
    const usuarioService:UsuarioService=TestBed.inject(UsuarioService);
    expect(usuarioService).toBeTruthy();
  });

  it('deberia de listar usuarios',()=>{
    const dummyUsuarios=[
      new Usuario(1,'Usuario',1234),
      new Usuario(2,"usauario 2",9876)
    ];
    service.consultar().subscribe(usuarios =>{
      expect(usuarios.length).toBe(2);
      expect(usuarios).toEqual(dummyUsuarios)
    });
    const req = httpMock.expectOne(`${apiEndpointUsuariosConsulta}/`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsuarios);
  });

  it('deberia crear un usuario', () => {
    const dummyUsuario = new Usuario(1, 'Usuario 1', 1234);
    service.guardar(dummyUsuario).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndPointUsuarios}/`);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('debería eliminar un usuario',()=>{
    new Usuario(1,'usuario',1234);
    service.eliminar(1).subscribe((respuesta)=>{
      expect(respuesta).toEqual(true)
    });
    const req =httpMock.expectOne(`${apiEndPointUsuarios}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body:true}))
  });
  it('debería editar un usuario',()=>{
   const dummyUsuario= new Usuario(1,'usuario',1234);
    service.editar(dummyUsuario).subscribe((respuesta)=>{
      expect(respuesta).toEqual(true)
    });
    const req =httpMock.expectOne(`${apiEndPointUsuarios}/1`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body:true}))
  });
});
