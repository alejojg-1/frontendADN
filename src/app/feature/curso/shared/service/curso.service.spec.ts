import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Curso } from '../model/curso.model';

import { CursoService } from './curso.service';

describe('CursoService', () => {
  let httpMock: HttpTestingController;
  let service: CursoService;
  const apiEndpointCursosConsulta= `${environment.url_api}/cursos`;
  const apiEndPointCursos= `${environment.url_api}/cursos`

  beforeEach(() => {
    const injector=TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CursoService, HttpService]
    })
    httpMock= injector.inject(HttpTestingController);
    service= TestBed.inject(CursoService);
  });

  it('should be created', () => {
    const cursoService:CursoService=TestBed.inject(CursoService);
    expect(cursoService).toBeTruthy();
  });

  it('deberia de listar usuarios',()=>{
    const dummyCursos=[
      new Curso(1,'curso 1',"PRIMARIA",10000,"esto e suna prueba"),
      new Curso(2,"curso 2","UNIVERSIDAD",20000,"esto e suna prueba")
    ];
    service.consultar().subscribe(cursos =>{
      expect(cursos.length).toBe(2);
      expect(cursos).toEqual(dummyCursos)
    });
    const req = httpMock.expectOne(`${apiEndpointCursosConsulta}/`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCursos);
  });

  it('deberia crear un curso', () => {
    const dummyCurso = new Curso(1,'curso 1',"PRIMARIA",10000,"esto es una prueba");
    service.guardar(dummyCurso).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndPointCursos}/`);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('debería eliminar un curso',()=>{
    new Curso(1,'curso 1',"PRIMARIA",10000,"esto es una prueba");
    service.eliminar(1).subscribe((respuesta)=>{
      expect(respuesta).toEqual(true)
    });
    const req =httpMock.expectOne(`${apiEndPointCursos}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body:true}))
  });
  it('debería editar un curso',()=>{
   const dummyCurso=  new Curso(1,'curso 1',"PRIMARIA",10000,"esto es una prueba");
    service.editar(dummyCurso).subscribe((respuesta)=>{
      expect(respuesta).toEqual(true)
    });
    const req =httpMock.expectOne(`${apiEndPointCursos}/1`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body:true}))
  });
});
